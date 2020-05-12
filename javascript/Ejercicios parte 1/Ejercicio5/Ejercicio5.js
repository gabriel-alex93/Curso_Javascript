'use strict'
 
//Ejercicio 5

/*
mostrar todos los numeros divisores de un numero introducido por usuario
*/

var valor1 = parseInt(prompt('introduce el numero a buscar divisores',0));

document.write("<h1>Los numeros divisores de "+valor1+" son </h1>");

for(var i = 0; i<valor1; i++){
		if (valor1%i==0){
			document.write(i+"<br/>");

		}
	}