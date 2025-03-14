<%
if(request.getParameter("xmlid") == null) {
  out.print(":(");
} else {
  out.print(br.com.l2software.api.utils.v3.RefererServerLicense.getResponse(request.getParameter("xmlid"), request.getParameter("salt"), request.getParameter("hash")));
}
%>