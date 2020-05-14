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
	elementos.forEach((numero ,indice)=>{
		document.write("<li>"+indice+" - "+numero+"</li>");
	});
	document.write("</ul>");

}
function solicitaValor(){
	let Valor = parseInt(prompt("introduce un numero para buscar ubicacion",0));
	return valor;
}
function busqueda(numeros, valor){
	var busqueda = numeros.findIndex(numero=>numero == valor);
	return busqueda;

}


 var numeros= Array(6);
 for(var i = 0; i<5; i++){
 	numeros[i] = parseInt(prompt("introduce un numero",0));
 }
mostrarArray(numeros,"numeros"); 

console.log(numeros);
numeros.sort(function(a,b){return a-b});//ordenar numeros de menor a mayor,(se cambia la b por la a para ordenar de mayor a menor)
mostrarArray(numeros, "ordenado");
numeros.reverse();
mostrarArray(numeros, "revertido");
console.log(numeros);

console.log(numeros.lenght);
var valor= solicitaValor();
var posicion= busqueda(numeros,valor);

if (posicion && posicion != -1){
	document.write("<h1>Encontrado<h1/>");
	document.write("<h1>Posicion de la busqueada"+ busqueda+"<h1/>");

}
else {
	document.write("<h1>No encontrado<h1/>");

}

