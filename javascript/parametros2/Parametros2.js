'use strict'
// Parametros Rest y Spread

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){//recibira los parametros que quiera dentro de un array (REST)
	console.log("fruta 1: ", fruta1);
	console.log("fruta 2: ", fruta2);
	console.log(resto_de_frutas);
}

listadoFrutas("Naranja","Manzana", "Pera", "sandia", "melon");

var frutas = ["Naranja","Manzana"];
listadoFrutas( ...frutas, "Pera", "sandia", "melon");// reinterpreta el array como 2 parametros para la funcion indiicada(debe llevar los 3 puntos) 


