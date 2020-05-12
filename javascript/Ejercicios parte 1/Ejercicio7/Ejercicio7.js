'use strict'
 
//Ejercicio 7

/*
tabla de multiplicar de un numero introducido por pantalla
*/

var valor1 = parseInt(prompt('introduce el primer numero',1));

while(valor1<=0 || isNaN(valor1) ){
	var valor1 = parseInt(prompt('introduce el primer numero',1));
}

document.write("La tabla de multiplicar de"+valor1+" es:</h1><br/>");

	for(var i = 1; i<=12; i++){
			document.write(i+" x "+valor1+" = "+(i*valor1)+"<br/>");
	}


