'use strict'
 
//Ejercicio 8

/*
calculadora
-pida 2 numeros por pantalla
- si metemos uno mal los vuelva a pedir
-en el cuepo de la pagina, en un alerta y por consola el resultado de sumar, restar, multiplicar dividir
*/

var valor1 = parseInt(prompt('introduce el primer numero',0));
var valor2 = parseInt(prompt('introduce el segundo numero',0));
console.log(valor1, valor2);
while(isNaN(valor1) || isNaN(valor2)){
	var valor1 = parseInt(prompt('introduce el primer numero',0));
	var valor2 = parseInt(prompt('introduce el segundo numero',0));

}
alert("La suma es "+(valor1+valor2)+"\n"+"La resta es "+(valor1-valor2)+"\nLa multiplicacion es "+(valor1*valor2)+"\nLa division es "+(valor1/valor2)+"\n" );


document.write("La suma es "+(valor1+valor2)+"<br/>");
document.write("La resta es "+(valor1-valor2)+"<br/>");
document.write("La multiplicacion es "+(valor1*valor2)+"<br/>");
document.write("La division es "+(valor1/valor2)+"<br/>");
