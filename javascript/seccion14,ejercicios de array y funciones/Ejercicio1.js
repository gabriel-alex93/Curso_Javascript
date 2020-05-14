'use strict'
 
//Programa que 
/*
1.-pida 6 numeros por pantalla y los meta en un array
2.- mostrar el array entero(todos sus elementos) en el cuerpo de la pagina y la consola
3.-Ordenarlo y mostrarlo
4.- invertir su orden y mostrarlo
5.-Mostrar cuantos elementos tiene el array
6.- busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su inidice 
(Se valorará el uso de funciones).

*/
function  mostrarArray(elementos, textoCustom = ""){
	document.write("Contenido del array: "+textoCustom+"<h1/>");
	document.write("<ul>");
	for(var i = 0; i < elementos.length; i++ ){
		document.write("<li>"+elementos[i]+"</li>");
	}

	document.write("</ul>");

}
//pedir 6 numeros
var numeros= Array(6);
 for(var i = 0; i<6; i++){
 	numeros[i] = parseInt(prompt("introduce un numero",0));
 }
mostrarArray(numeros,"numeros"); 
//mostrar en el cuerpo de la pagina
mostrarArray(numeros);
console.log(numeros);
 
 

console.log(numeros);
//ordenar y mostrar
numeros.sort(function(a,b){return a-b});//ordenar numeros de menor a mayor,(se cambia la b por la a para ordenar de mayor a menor)
mostrarArray(numeros, "ordenado");
//invertir y mostrar
numeros.reverse();
mostrarArray(numeros, "revertido");
console.log(numeros);
//contar y mostrar
console.log(numeros.length);
document.write("<h1>El array tiene: "+numeros.length+" elementos. </h1>");


//busqueda
var busqueda = parseInt(prompt("Busca un numero",0));

var posicion= numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1){
	document.write("<h1>Encontrado<h1/>");
	document.write("<h1>Posicion de la busqueada"+ busqueda+"<h1/>");

}
else {
	document.write("<h1>No encontrado<h1/>");

}

