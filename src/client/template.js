export default ({ body, preloadedState, componentNames, css }) => `
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	<meta name="theme-color" content="#4d67d2">
	<!-- Apple -->
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="#4d67d2">

	<title>STURENT</title>

	<!-- JavaScripts -->
	<script type="text/javascript" id="state">
		window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
		document.getElementById('state').remove();
	</script>
	<script async type="text/javascript" src="/js/bundle.js"></script>
	<!-- Fonts -->
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,500;subset=cyrillic" rel="stylesheet">
	<!-- Styles -->
	<style type="text/css" id="css">${[...css].join('')}</style>
</head>
<body>
	<!-- App -->
	<div id="root">${body}</div>
</body>
</html>
`;
//<link rel="stylesheet" type="text/css" href="/css/styles.css" >
//<link rel="stylesheet" type="text/css" media="screen and (min-width: 776px)" href="/css/min-776.css"/>
// ${componentNames ? (componentNames.map(componentName => `<script type="text/javascript" src='/js/${componentName}.js' async></script>`)) : ''}
