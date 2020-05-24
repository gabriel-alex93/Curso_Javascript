$(document).ready(function(){
	//
	$("#mostrar").hide();
	var caja= $("#caja");
	$("#mostrar").click(function(){
		$(this).hide();
		$("#ocultar").show();
		//$("#caja").show('normal');
		//$("#caja").fadeIn('normal');
		$("#caja").fadeTo('slow',1);
	});

	$("#ocultar").click(function(){
		$(this).hide();
		$("#mostrar").show();
		//$("#caja").hide('normal');
		//$("#caja").fadeOut('normal');
		$("#caja").fadeTo('slow',0);
		console.log
	});


	$("#todoenuno").click(function(){//es lo mismo que lo anterior pero es mas simple y rapido con un solo boton
		$("#caja").toggle('fast');


	});

	$("#animar").click(function(){
		caja.animate({
			marginLeft:'500px',
			fontSize: '40px',
			height: '110px'

		},'slow')
		.animate({
			borderRadius: '900px',
			marginTop: '80px'
		},'fast')
		.animate({
			borderRadius: '0px',
			marginLeft: '0px'
		},'fast')
		.animate({
			borderRadius: '100px',
			marginTop: '0px'
		},'fast');


	});

	
});