$(document).ready(function(){
	//selector de ID
	var rojo= $("#rojo").css("background","red")
						.css("color","white");
	var amarillo = $("#amarillo").css("background","yellow")
								.css("color","green");
	$("#verde").css("background","green")
			   .css("color","white");//NO ES NECESARIO CREAR UNA VARIABLE
	console.log(rojo);
	//Selectores de clase
	var mi_clase = $('.zebra').css("padding","5px");
	
	console.log(mi_clase);

	$('.sin_borde').click(function(){
		console.log("click dado");
		$(this).addClass('zebra');
	});

	//Selectores de etiqueta
	var parrafos = $('p').css("cursor","pointer");

	parrafos.click(function(){
		var that = $(this);
		if( that.hasClass('grande')){
			that.addClass('grande');
		}
		else{
			that.removeClass('grande');
		}

	});
	//selectores de atributos
	$('[title= "Google"]').css('background','#ccc');
	$('[title= "Facebook"]').css('background','blue');

	//otros

	//$('p, a' ).addClass('margen-superior'); //se añadio clase margen-superior a todos los parrafos (p) y referencias (a).

	//var busqueda = $("#caja").find('.resaltado');//sirve para buscar etiquetas dentro del html(busca aquellos que tenga la clase "resaltado")
	var busqueda = $("#caja .resaltado").parent().find('[title="Google"]');//Sirve para ir saltande de etiqueta en etiqueta en la busqueda
	console.log(busqueda);



});