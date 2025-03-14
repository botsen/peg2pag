<%@page import="wfr.web.manage.session.ManageSessions"%>
<%@page import="wfr.util.Functions"%>
<%@ page import="wfr.com.*, wfr.sys.HTMLInterface.*" %>
<%@ page import="wfr.exceptions.*" %>
<%@ page import="wfr.util.Logger" %>
<%@ page import="wfr.util.Settings" %>
<%@ taglib uri="/WEB-INF/tlds/webrun.tld" prefix="webrun" %>
<%
  response.setContentType("text/html; charset=" + Settings.CHARSET);

  Logger logger = Logger.getLogger(this.getClass());
  String sys = request.getParameter("sys");
  HTMLInterface htmlInterface = null;
  WFRSystem system;
  String iconApp = "webrun.ico";
  String url = "";
  String endpointSocket = "";

  try {
    htmlInterface = HTMLInterface.getInstance(request);
    system = htmlInterface.getSystem();

    endpointSocket = ManageSessions.getInstance().getManageSocketSessions().getEndpointWebsocket();

    if (htmlInterface.getSystem().getProperty(ComponentProperty.CODIGO_FORM).length() > 0 && Integer.parseInt(htmlInterface.getSystem().getProperty(ComponentProperty.CODIGO_FORM)) > 0)  {
      WFRForm form = htmlInterface.getSystem().getForm(htmlInterface.getSystem().getProperty(ComponentProperty.CODIGO_FORM), htmlInterface.getData().connection());
      url = "form.jsp?sys=" + sys + "&action=openform&formID=" + form.getCode() + "&mode=-1&goto=-1&filter=&scrolling=" + form.getProperty(ComponentProperty.BARRA_DE_ROLAGEM) + "&firstLoad=true";
    }

    if (system.getIconImage() != null && system.getIconImage().getCode() > 0) {
      iconApp = WFRImage.getImagePath(system.getCode(), String.valueOf(system.getIconImage().getCode()));
    }
  } catch (Exception ex) {
    logger.error(htmlInterface != null ? htmlInterface.getUser() : WFRSystem.DEFAULT_USER, sys != null ? sys : WFRSystem.DEFAULT_SYSTEM, ex.getMessage(), ex);
    return;
  }

  int sessionTime = (wfr.util.WFRConfig.config().getInt("Sessao", "Tempo", 3600) / 2) * 1000;
%>
<!DOCTYPE html>
<html class="w-100 h-100">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=${webrun:charset()}">
    <meta name="viewport" content="width=device-width, user-scalable=yes">
    <link rel="shortcut icon" href="<%=iconApp%>" type="image/x-icon">
    <%= HTMLConstants.BOOTSTRAP_CSS %>
    <%= HTMLConstants.FORM_CSS %>
    <webrun:import src="wfr.js"/>
    <webrun:import src="rulesFunctions.js"/>
    <webrun:import src="components/sweetalert/sweetalert.min.js"/>
    <%= HTMLConstants.API_MESSAGE %>
    <%= Functions.legacyMessage() %>
    <script type="text/javascript">
      let jsonMessage;
      function systemOnLoadAction() {
        if (mainsystem.sysOnLoad) {
          mainsystem.sysOnLoad();
        }
        systemConnectWebsocket();
      }

      var unloaded = false;
      function systemOnUnLoadAction() {
        if (!unloaded) {
          unloaded = true;
          if (mainsystem.sysOnUnLoad) mainsystem.sysOnUnLoad();
          if (mainsystem.formOnUnLoadAction) mainsystem.formOnUnLoadAction();
          if(window.webrunSocket && window.webrunSocket.readyState === window.webrunSocket.OPEN) {
            window.webrunSocket.send(JSON.stringify({"action": "closesystem", "system": "<%=htmlInterface.getSystem().getCode()%>"}));
          } else {
            try {
              get('closesystem.do?sys=<%=request.getParameter("sys")%>');
            } catch(e) { }
          }
          closeParents();
        }
      }

      function changeTitle(t) {
        document.title = t;
      }

      /**
       * Função responsável por gerenciar a conexão do usuário com servidor Websocket;
       * @autor Janpier
       * @param reconnect - Indica se é para o usuário se reconectar ao socket.
       */
      function systemConnectWebsocket (reconnect) {
        window.webrunSocket = new WebSocket('<%=endpointSocket%>');

        window.webrunSocket.onopen = (event) => {
          let sendMessage = {};
          sendMessage.sysCode = "<%=htmlInterface.getSystem().getCode()%>";
          sendMessage.sessionID = "<%=request.getSession().getId()%>";
          if (reconnect) sendMessage.userId = jsonMessage.userId;
            window.webrunSocket.send(JSON.stringify(sendMessage));
        }

        window.webrunSocket.onclose = (event) => {
          console.log('Socket closed');
        };

        window.webrunSocket.onerror = (err) => {
          console.error('Socket encountered error: ', err.message);
        };

        window.webrunSocket.onmessage = (event) => {
          if (event.data) {
            try {
              jsonMessage = JSON.parse(event.data);
            } catch (e) {
              console.error(e);
            }
          }
        }
      }

      /**
       * Associa o evento para verificacão se o usuário está desconectado da internet.
       * @autor Janpier
       */
      window.addEventListener('offline', (event) => {
        if (<%=WFRSystem.isMakerWEB()%>) {
          let message = new HTMLMessage();
          message.showWarningMessage("", "No internet connection", 3, "DT");
        }
      });

      /**
       * Associa o evento para verificação se o usuário está conectado a internet.
       * @autor Janpier
       */
      window.addEventListener('online', (event) => {
        if (<%=WFRSystem.isMakerWEB()%>) {
          let message = new HTMLMessage();
          message.showSuccessMessage("", "Internet connection re-established", 3, "DT");
        }
        systemConnectWebsocket(true);
      });

      function remainSession() {
        try { httpPool.processAsyncGet('remainSession.do?sys=<%=request.getParameter("sys")%>&datetime='+(new Date().getMilliseconds())); } catch(e) { }
        setTimeout(remainSession, <%=sessionTime%>);
      }

      setTimeout(remainSession, <%=sessionTime%>);
    </script>
  </head>
  <body class="w-100 h-100" onload="systemOnLoadAction()" onunload="systemOnUnLoadAction()" onbeforeunload="systemOnUnLoadAction()">
    <iframe src="<%=url%>" name="mainsystem" class="position-absolute border-0 w-100 h-100 m-0 overflow-auto" scrolling="no" noresize></iframe>
  </body>
</html>