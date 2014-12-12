<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>

<%!
	String contextPath = null;
	String imgPath = null;
	String jsPath = null;
	String cssPath = null;
	String libPath = null;
	String loginImgPath = null;
%>
<%
	contextPath = request.getContextPath();
	contextPath = contextPath.replaceAll("\\/\\/", "\\/");
	
	if (contextPath != null && contextPath.endsWith("/")) {
		contextPath = contextPath.replaceAll("\\/", "");
	}
	
	imgPath = contextPath + "/include/images/";
	jsPath = contextPath + "/include/js/";
	cssPath = contextPath + "/include/css/";
	libPath = contextPath + "/include/lib/";
	loginImgPath = contextPath + "/include/images/login/";
%>