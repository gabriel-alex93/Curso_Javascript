'use strict'
 
//Ejercicio 1

var nombre = "Gabriel";
var nombres = ["Gabriel", "Alex", "Rosa",52 , true];// se pueden almacenar distintos objetos

var lenguajes =  new Array("PHP", "JS", "GO" , "JAVA", "C#", "C");//A qui los arrays inician en 0
//console.log(nombres[0]);
//console.log(lenguajes);
//console.log(nombres.length);
//var elemento = parseInt(prompt("¿Qué elemento del array quieres?",0));
/*
if ( elemento >= nombres.length){
	alert("introduce el numero correcto menor que "+nombres.length );
}
else{
	alert(nombres[elemento]);
}
*/

document.write("<h1>Lenguajes de programación del 2018:<h1/>");
document.write("</ul>");
/*for( var i = 0; i< lenguajes.length; i++){
	document.write("<li>"+lenguajes[i]+"</li>");
}*/
//***********Recorre el array de igual forma que un for con una funcion callback********
lenguajes.forEach((elemento ,indice)=>{
	document.write("<li>"+indice+" - "+elemento+"</li>");
});

document.write("</ul>");

//For in
for(let lenguaje in lenguajes){
	document.write("<li> "+lenguajes[lenguaje]+" </li>");
}

//Busquedas

 var busqueda = lenguajes.find(function(lenguaje){
 	return lenguaje == "PHP";

 });
	
//este tipo de busqueda es lo mismo pero reducido

 var busqueda = lenguajes.find(lenguaje=>lenguaje == "PHP");

 var busqueda = lenguajes.findIndex(lenguaje=>lenguaje == "PHP");

 //

 var precios =[10, 20, 50, 80, 12];
 var busqueda = lenguajes.some(precio=>precio >= 80);//busca un precio mayor o igual a 80 , este metodo sirve para encontrar si un elemento cumple una condicion concreta
