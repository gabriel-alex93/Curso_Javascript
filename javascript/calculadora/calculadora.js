'use strict'
function porConsola(a,b){
	console.log("Suma: "+(a+b));
	console.log("Resta:  "+(a-b));
	console.log("Multiplicacion: "+(a*b));
	console.log("Division: "+ (a/b));

}
function porPantalla(a,b){
	document.write("Suma: "+(a+b)+ "<br/>");
	document.write("Resta:  "+(a-b)+"<br/>");
	document.write("Multiplicacion: "+(a*b)+"<br/>");
	document.write("Division: "+ (a/b)+"<br/>");
	
}

function calculadora(a,b, mostrar=false){
	if (mostrar== false){
		porConsola(a,b);

	}
	else{
		porPantalla(a,b);

	}
	return true;
}

//var resultado =calculadora();
calculadora(12,8);
calculadora(12,8,true);
/*
for(var i=1; i<=10;i++){
	console.log(i);
	calculadora(i,8);

}

*/
