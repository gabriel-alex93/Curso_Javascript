'use strict'
 
//Ejercicio 2

/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultado
*/

var suma = 0;
var contador = 0;

do{
	var numero = parseInt(prompt('introduce numeros hasta ingresar uno negativo',0));
	if(isNaN(numero)){
			numero = 0
	} 
	else if(numero >= 0){
		suma += numero;
		contador++;
	}
	console.log(suma);
	console.log(contador);

}while(numero >= 0)

alert("la suma de todos los numeros es: "+  suma);
alert("la media de todos los numer es "+ (suma/contador));