$(document).ready(function(){
	

	reloadLinks();

	$('#add_button').removeAttr('disabled')
		.click(function(){
		//$('#menu').append('<li><a href="'+$("#add_link").val()+'"></a></li>');//añade enlace al final de la lista
		$('#menu').prepend('<li><a href="'+$("#add_link").val()+'"></a></li>');//añade el principio de la lista
		$("#add_link").val('');
		reloadLinks();
	});

	

});

function reloadLinks(){
	$('a').each(function(index){
		var that = $(this); 
		var enlace = $(this).attr("href");
		that.attr('target','_blanck');
	
		that.text(enlace);
	});
}