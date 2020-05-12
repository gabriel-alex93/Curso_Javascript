'use strict'
 
//Ejercicio 6

/*
que nos diga si un numero es par o impar
1.-ventana prompt
2.- si no es valido que nos pida de nuevo el numero
3.- si el numero es par o no

*/

var valor1 = parseInt(prompt('introduce el primer numero',0));

while( isNaN(valor1) ){
	var valor1 = parseInt(prompt('introduce el primer numero',0));

}

if(valor1%2==0){
	alert("Es par");

}
else if(valor1%2 != 0){
	alert("Es impar");

}