'use strict'
//Local storage
//comprobar disponibilidad del local storage 
if(typeof(Storage) !== 'undefined'){
	console.log("localstorage disponible");
}
else{
	console.log("localstorage no disponible");
}
//guardar datos 
localStorage.setItem("titulo", "curso de javascript" );//key y contenido 

//recuperar elemento
console.log(localStorage.getItem("titulo"));
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar objetos
var usuario = {
	nombre : "Gabriel Gonzalez",
	email : "gabriel.gonzalez3981@gmail.com",
	web : "xxx"
};

localStorage.setItem("usuario",JSON.stringify(usuario));//no funciona bien, suele ser necesario guardar los datos en string.


//recuperar objeto
console.log(localStorage.getItem("usuario"));//devuelve un string no manejable

var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#peliculas").append(" "+userjs.web+" "+userjs.nombre);

localStorage.removeItem("usuario");//remove usuario de local storage
localStorage.clear();


