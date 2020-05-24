$(document).ready(function(){
	//alert("cargado");
	//
	var caja =$("#caja");
	/*
	caja.mouseover(function(){
		$(this).css("background","red");
	});

	caja.mouseout(function(){
		$(this).css("background","green");
	});
	*/
	//Hover
	function cambiaRojo(){
		$(this).css("background","red");
	}
	function cambiaVerde(){
		$(this).css("background","green");
	}
	caja.hover(cambiaRojo,cambiaVerde);

	//click, doble click

	caja.click(function(){
		$(this).css("background","blue");
	});

	caja.dblclick(function(){
		$(this).css("background","pink")
			   .css("color","yellow");
	});
	//focus y blur
	var nombre = $("#nombre");
	var datos = $("#datos");
	nombre.focus(function(){
		$(this).css("border", "2px solid green");

	});

	nombre.blur(function(){
		$(this).css("border", "1px solid #ccc");
		//$(this).val(); saco lo que tengo escrito en el input
		$("#datos").text($(this).val()).show();
	});

	//mouse down y mouse up
	datos.mousedown(function(){
		$(this).css("border-color","gray");
	});
	datos.mouseup(function(){
		$(this).css("border-color","black");
	});

	//mouse move
	$(document).mousemove(function(){
		$('body').css("cursor","none");
		var sigueme=$("#sigueme"); 
		sigueme.css("left",event.clientX);
		sigueme.css("top",event.clientY);
	});

});