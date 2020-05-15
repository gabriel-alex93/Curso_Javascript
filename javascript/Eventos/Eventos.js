'use strict'
 
 //Eventos una funcion que se ejecuta cuan sucede algo

 //eventos del raton

window.addEventListener('load', ()=>{// esto me permite llamar el archivo javascript desde el html despues del head que es donde se recomienda y no abajo


function cambiarColor(boton){
	var bg = boton.style.background;
	if(bg == "green"){
		boton.style.background = "red";

	}
	else{
		boton.style.background = "green";
	}
	boton.style.padding = "10px";
	boton.style.border = "1px solid #ccc";
	return true;
}
//click
var boton1= document.querySelector("#boton");
var boton2= document.querySelector("#boton2");
boton1.addEventListener('click',function(){
	cambiarColor(boton1);

});
boton2.addEventListener('click',function(){
	cambiarColor(boton2);

});
//mouse over(cuando encima del elemento)

boton1.addEventListener('mouseover',function(){
	boton1.style.background = "yellow"; 
});
//mouse out(cuenado sales del elemento)

boton1.addEventListener('mouseout',function(){
	boton1.style.background = "#ccc"; 
});

//Focus(cuando pongo el cursor dentro del input)
var input= document.querySelector("#campo_nombre");
input.addEventListener('focus',function(){
	console.log("[focus]Estas dentro del input");
});

//blur(cuando saco el cursor del input)
input.addEventListener('blur',function(){
	console.log("[blur]Estas fuera del input");
});

//keydown: CAPTURA MIENTRAS SE PRESIONA UNA TECLA
input.addEventListener('keydown',function(event){//si no va la palabra event dentro de funcion no podemos capturar la tecla presionada
	console.log("[keydown] pulsando esta tecla",String.fromCharCode(event.keyCode));
});

//keypress
input.addEventListener('keypress',function(event){//si no va la palabra event dentro de funcion no podemos capturar la tecla presionada
	console.log("[keypress] pulsando esta tecla",String.fromCharCode(event.keyCode));
});

//keyup

input.addEventListener('keyup',function(event){//si no va la palabra event dentro de funcion no podemos capturar la tecla presionada
	console.log("[keyup] tecla soltado",String.fromCharCode(event.keyCode));
});



});




