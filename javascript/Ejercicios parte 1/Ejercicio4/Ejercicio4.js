'use strict'
 
//Ejercicio 4

/*
mostrar todos los numeros impares que entre 2 numeros introducidos por el usuario
*/

var valor1 = parseInt(prompt('introduce el primer numero',0));
var valor2 = parseInt(prompt('introduce el segundo numero',0));
console.log(valor1, valor2);
while(valor1<=0 || valor2<=0 || isNaN(valor1) || isNaN(valor2)){
	var valor1 = parseInt(prompt('introduce el primer numero',0));
	var valor2 = parseInt(prompt('introduce el segundo numero',0));

}

document.write("<h1>De "+valor1+" a "+valor2+" están estos números impares:</h1>");
if (valor1<valor2){
	for(var i = valor1; i<valor2; i++){
		if(i%2 !=0 ){
			document.write(i+"<br/>");
		}
	}

}
else if (valor2<valor1){
	for(var i = valor2; i<valor1; i++){
		if(i%2 !=0 ){
			document.write(i+"<br/>");
		}
	}

}