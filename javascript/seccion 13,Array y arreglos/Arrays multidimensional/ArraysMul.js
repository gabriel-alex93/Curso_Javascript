'use strict'
 
//Array multidimensional

var categorias = ['accion','terror','comedias'];
var peliculas = ['la verdad duele', 'la vida es bella', 'gran torino'];

//ordenar un array
peliculas.sort();//ordena por orden alfabetico
peliculas.reverse();//reordena de reversa el array

//


var cine = [categorias, peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2]);

var elemento = "";

do{
	var elemento = prompt("introduce la pelicual:");
	peliculas.push(elemento);//agrega un elemento al array peliculas

}while(elemento != "ACABAR");

peliculas.pop();//elimina el ultimo elemento del array
peliculas[0] =  undefined;//deja invalido el primer elemento;
var indice = peliculas.indexOf('gran torino');

if(indice > -1){
	peliculas.splice(indice,1);// permite en base  a un indice  borrar los que tenga por delante del indice

}
//Array pasa a string separado por comas
var peliculas_string = peliculas.join();
console.log(peliculas_string);
console.log(indice);
console.log(peliculas);

//cadena que puede pasar a array
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");





