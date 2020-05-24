$(document).ready(function(){
	//LOAD
	//$("#datos").load("https://reqres.in/");

	//get y post

	$.get("https://reqres.in/api/users",{page:2},function(response){
		console.log(response);
		response.data.forEach((element, index)=>{
			$("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
		});
	});
	
	$("#formulario").submit(function(e){
		e.preventDefault();//evito redirigir
		var usuario = {
			"name": $('input[name="first_name"]').val(),
			"web": $('input[name="web"]').val()
		};
	/*
		console.log(usuario);
	
		$.post($(this).attr("action"),usuario, function(response){
			console.log(response);

		});
		return false;
	});
*/
//otra forma con ajax
	$.ajax({
		type: 'POST',
		url: $(this).attr("action"),
		data: usuario,
		beforeSend: function(){
			console.log("Enviando usuario...");
		},
		success: function(response){
			console.log(response);

		},
		error: function(){
			console.log("Ha ocurrido un error");
		},
		timeout: 5000
	});
	return false;
	});



});