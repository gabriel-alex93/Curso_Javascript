'use strict'
 

 function holaMundo(texto){
 	var hola_mundo = "Texto de función";
 	console.log(texto);
 	console.log(numero);//como es una variabel global puedo acceder a ella
 	console.log(hola_mundo);

 }

 //variables globales
 var numero = 12
 var texto = "Hola mundo soy una variable global"; 
 holaMundo(texto);

 //console.log(hola_mundo);// no se puede por que es una variable local dentro de la funcion