'use strict'
//JSON : NOTACION DE OBJETOS EN JAVASCRIPT 
 var pelicula = {
		titulo :'Batman  vs Superman',
		year : 2017,
		pais : 'USA'
	};
console.log(pelicula);
pelicula.titulo = "Superman Begin";

var peliculas = [
	{titulo: "la verdad duele", year: 2016, pais : "Francia"},pelicula

];




window.addEventListener('load', ()=>{
console.log(peliculas);
var caja_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
	var p = document.createElement("p");
	p.append(peliculas[index].titulo+ " - "+peliculas[index].year);
	caja_peliculas.append(p);
}

});