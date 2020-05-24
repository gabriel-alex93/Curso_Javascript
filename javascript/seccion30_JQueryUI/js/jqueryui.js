$(document).ready(function(){
	console.log("hola");

	//mover elemento por la pagina
	$('.elemento').draggable();

	//redimensionar
	$('.elemento').resizable();

	//selectable
	//$(".lista_seleccionable").selectable();

	//ordenar
	$(".lista_seleccionable").sortable({
		update:function(event, ui){
			console.log("Ha cambiado la lista.");
		}
	});

	//drop
	$("#elemento-movido").draggable();
	$("#area").droppable(
	{
		drop: function(){
			console.log("Has soltado algo dentro");

		}});

	//efectos
	$("#mostrar").click(function(){
		$(".caja-efectos").toggle("explode");//hay muchos efectos, revisar documentacion

	});

	//tooltip
	$(document).tooltip();

	//dialog

	$("#lanzar-popup").click(function(){
			$("#popup").dialog();

	});
	//datepicker calendario

	$("#calendario").datepicker();

	//tabs
	$("#pestanas").tabs();


});