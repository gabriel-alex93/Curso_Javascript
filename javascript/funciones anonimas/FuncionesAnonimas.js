'use strict'
// funciones anonimas
// funcion que no tiene nombre se guarda dentro de una variable
//callback=funcion que se ejecuta dentro de otra (callback)


//ejemplo funcion anonima
var pelicula= function(nombre){
	return "la pelicula es:"+nombre;
}

//ejemplo funcion callback
function sumame(a,b, sumaYMuestra, sumaPorDos){
	var sumar=a+b;
	sumaYMuestra(sumar);
	sumaPorDos(sumar);
}
//callback=funcion que se ejecuta dentro de otra (callback)
sumame(5,7,function(dato){
	console.log("la suma es dato: " ,dato);

},function(dato){
	console.log("la suma por dos es: ", (dato*2));
}

);


// funciones flecha: es lo mismo que funcion callback pero en lugar de function se le pone una flecha
sumame(5,7,dato=>{
	console.log("la suma es dato: " ,dato);

},dato=>{
	console.log("la suma por dos es: ", (dato*2));
}

);
