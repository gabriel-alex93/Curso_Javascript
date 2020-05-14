'use strict'
 
 //BOM(BROWSER OBJECT MODEL) VER TAMAÑO DEL NAVEGADOR, REDIRECCCIONAR DE UNA URLA OTRA
function getBom(){//
	console.log(window.innerWidth);//  
	console.log(window.innerHeight);//obtiene el ancho y el alto de la ventana donde se muestra el sitio web
	console.log(screen.width);//  
	console.log(screen.height);
	console.log(window.location);
	console.log(window.location.href);
}
function redireccionar(url){//redirecciona a una url
	window.location.href = url;
}
function abrirVentana(url){//abre otra ventana con url nueva
	window.open(url,"","width = 400, height = 300");
}
getBom();
