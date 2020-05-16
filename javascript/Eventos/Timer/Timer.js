'use strict'




window.addEventListener('load', ()=>{// esto me permite llamar el archivo javascript desde el html despues del head que es donde se recomienda y no abajo
	//timers

	//setTimeout se ejecuta una sola vez  alos 5000 ms 
	/*var tiempo=setTimeout(function(){
		console.log("Set interval ejecutado");
		var encabezado = document.querySelector("h1");
		if(encabezado.style.fontSize == "50px"){
			encabezado.style.fontSize = "20px";
		}
		else{
			encabezado.style.fontSize = "50px"

		}
	

	}, 5000);
	*/
	//setINterval se ejecuta cada 5000 ms 
	function intervalo(){
		var tiempo=setInterval(function(){
		console.log("Set interval ejecutado");
		var encabezado = document.querySelector("h1");
		if(encabezado.style.fontSize == "50px"){
			encabezado.style.fontSize = "20px";
		}
		else{
			encabezado.style.fontSize = "50px"

		}
	}, 1000);
		return tiempo;

	}

	var tiempo=intervalo();
	//boton para detener ejecucion de timer
	var stop = document.querySelector("#stop"); 
	stop.addEventListener("click",function(){
		alert("has parado el bucle");
		clearInterval(tiempo);

	});
	var start = document.querySelector("#start"); 

	start.addEventListener("click",function(){
		alert("has iniciado el bucle");
		intervalo();

	});
});




