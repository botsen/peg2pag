<%@ taglib uri="/WEB-INF/tlds/webrun.tld" prefix="webrun"%>

<webrun:controller requiresManagerUser="true">

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=${webrun:charset()}" />
<title><webrun:message key="LABEL.IMPORTATION"/></title>
</head>

<frameset rows="50,*" frameborder="no" border="0" framespacing="0">
  <frame src="importFormFRZ.jsp?sys=<%=request.getParameter("sys")%>" name="topFrame" scrolling="no" noresize="noresize" id="topFrame" />
  <frame src="importContent.jsp?sys=<%=request.getParameter("sys")%>" name="mainFrame" id="mainFrame" />
</frameset>
<noframes><body>
</body>
</noframes></html>

</webrun:controller>