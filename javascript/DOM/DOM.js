'use strict'
 
 /*
CONSEGUIR ELEMENTOS CON UN ID CONCRETO

 */
//
function cambiaColor(color){
	caja2.style.background = color;

}
//var caja = document.getElementById("mi caja");//retorna el elemento del cuerpo de la pagina que se identifique por ese id
var caja = document.getElementById("mi caja").innerHTML;//Retorna el texto que tenga el html 
var caja3 = document.querySelector("#micaja");// se usa igual que getElementById solo que el id se representa por el #
console.log(caja);
var caja2 = document.getElementById("mi caja");//se puede ir cambiando lis atributos en la pagina
caja2.innerHTML = "¡Texto en la caja desde JS";//cambia el texto en el cuerpo de la pagina
caja2.style.background =  "red";
caja2.style.padding = "20px";
caja2.style.color = "white";

caja2.class = "hola";
caja2.className = "hola";

/*
CONSEGUIR ELEMNTOS POR SU ETIQUETA
*/


var todosLosDivs= document.getElementsByTagName('div');
console.log(todosLosDivs);
//var contenidoEnTexto = todosLosDivs[2].textContent;// obtengo el texto del div
var contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto.innerHTML = "cambio texto segundo div";//cambio el contenido de ese div
console.log(contenidoEnTexto);
contenidoEnTexto.style.background = "red";
//recorrer todos los div
//todosLosDivs.forEach((valor,indice)=> {
var valor;
//agrego eltexto como parrafos a una seccion
for (valor in todosLosDivs){
	if(typeof todosLosDivs[valor].textContent == "string"){
		var parrafo = document.createElement("p");//creo un parrafo no se ponen los simbolos
		var texto = document.createTextNode(todosLosDivs[valor].textContent);
		parrafo.appendChild(texto);//
		document.querySelector("#miseccion").appendChild(parrafo);
	}
}
	//});

//conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background= "yellow";
console.log(divsRojos);

var div;
for(div in divsRojos){
	if(divsRojos[div].className == "rojo"){
		divsRojos[div].style.background = "red";

	}
}

//QUERYSELECTOR

var id = document.querySelector("#encabezado");
console.log(id);
var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);

//PARA SELECCIONAR VARIOS ELEMENTOS CON QUERYSELECTER BUSCAR QuerySelectorAll()