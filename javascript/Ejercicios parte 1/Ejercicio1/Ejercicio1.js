'use strict'
 
//Ejercicio 1

//Programa que pida dos numeros y que nos diga  cual es el mayor, el menos y si son iguales
//si los numeros  no son un numero o son menores o iguales a cero,nos los vuelva a pedir

var valor1 = parseInt(prompt('introduce el primer numero',0));
var valor2 = parseInt(prompt('introduce el segundo numero',0));

console.log(valor1, valor2);
while(valor1<=0 || valor2<=0 || isNaN(valor1) || isNaN(valor2)){
	var valor1 = parseInt(prompt('introduce el primer numero',0));
	var valor2 = parseInt(prompt('introduce el segundo numero',0));

}

if(valor1 == valor2){
	alert("los numeros son iguales");
}
else if (valor1 > valor2){
	alert("el numero mayor es "+valor1+ " y el menor es " +valor2);
}
else if (valor2 > valor1 ){
	alert("el numero mayor es "+valor2+ " y el menor es " +valor1);

}
else{
	alert("introduce valores correctos");
}




