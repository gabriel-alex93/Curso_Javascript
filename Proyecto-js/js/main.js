'use strict'

$(document).ready(function(){


	if(window.location.href.indexOf('index')>-1){
		$('.bxslider').bxSlider({
    		mode: 'fade',
   	    	captions: true,
    		slideWidth: 600,
    		responsive: true
  		});
	}
  	//posts

  	var posts= [
  		{
  			title: 'prueba de titulo 1',
  			date: 'Publicado el dia '+moment().format("D")+ ' de ' +moment().format("MMMM")+ ' del año '+moment().format("YYYY") ,
  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum volutpat purus, ut placerat ipsum pellentesque non. Suspendisse bibendum a leo vel feugiat. Etiam sit amet porta erat. Maecenas faucibus tincidunt nunc, eget viverra nulla interdum et. Praesent ac tempus arcu, eget dignissim metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu tellus elit. In hac habitasse platea dictumst.'
  		},
  		{title: 'prueba de titulo 2',
  			date: 'Publicado el dia '+moment().format("D")+ ' de ' +moment().format("MMMM")+ ' del año '+moment().format("YYYY") ,
  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum volutpat purus, ut placerat ipsum pellentesque non. Suspendisse bibendum a leo vel feugiat. Etiam sit amet porta erat. Maecenas faucibus tincidunt nunc, eget viverra nulla interdum et. Praesent ac tempus arcu, eget dignissim metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu tellus elit. In hac habitasse platea dictumst.'},
  		{title: 'prueba de titulo 3',
  			date: 'Publicado el dia '+moment().format("D")+ ' de ' +moment().format("MMMM")+ ' del año '+moment().format("YYYY") ,
  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum volutpat purus, ut placerat ipsum pellentesque non. Suspendisse bibendum a leo vel feugiat. Etiam sit amet porta erat. Maecenas faucibus tincidunt nunc, eget viverra nulla interdum et. Praesent ac tempus arcu, eget dignissim metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu tellus elit. In hac habitasse platea dictumst.'},
  		{title: 'prueba de titulo 4',
  			date: 'Publicado el dia '+moment().format("D")+ ' de ' +moment().format("MMMM")+ ' del año '+moment().format("YYYY") ,
  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum volutpat purus, ut placerat ipsum pellentesque non. Suspendisse bibendum a leo vel feugiat. Etiam sit amet porta erat. Maecenas faucibus tincidunt nunc, eget viverra nulla interdum et. Praesent ac tempus arcu, eget dignissim metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu tellus elit. In hac habitasse platea dictumst.'}
	];
	
	posts.forEach((item,index)=>{
		var post= `
					<article class="post">
					<h2>${item.title}</h2>
						<span class="date">${item.date}</span>
					<p>
						${item.content}	
					</p>
					<a href="#" class= "button-more">Leer más</a>
				</article>

		`;
	
		$("#posts").append(post);

		});


	

	//selector de temas
	var theme=$("#theme");
	$("#to-green").click(function(){

		theme.attr("href","css/green.css");

	});
	$("#to-red").click(function(){

		theme.attr("href","css/red.css");

	});
	$("#to-blue").click(function(){

		theme.attr("href","css/blue.css");

	});
	//scroll arriba de la pagina

	$('.subir').click(function(e){
		e.preventDefault();
		$('html,body').animate({

			scrollTop: 0

		},800);
		return  false;

	});
	//login falso

	$("#login form").submit(function(){
		var form_name = $("#form_name").val();
		localStorage.setItem("form_name",form_name);
	});

	var form_name =localStorage.getItem("form_name");
	if(form_name != null || form_name!="undefined"){
		var about_parrafo = $("#about p");
		about_parrafo.html("<br><strong> Bienvenido, "+form_name+"</strong>");
		about_parrafo.append("<a href='#' id= 'logout'>Cerrar sesión</a>");
		$("#login").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();//recarga la pantalla
		});


	}

	//acordeon

	if(window.location.href.indexOf('about')>-1){
		$("#acordeon").accordion();
	}
	//reloj

	if(window.location.href.indexOf('reloj')>-1){

		setInterval(function(){
			var reloj = moment().format("hh:mm:ss");
			$('#reloj').html(reloj);
		},1000);
	}

//validacion
	if(window.location.href.indexOf('contacto')>-1){
		$("form input[name= 'date']").datepicker({
			dateFormat : 'dd-mm-yy'


		});
		$.validate({
    		lang: 'es',
    		errorMessagePosition: 'top',
    		scrollToTopOnError: true

  	 	});
	}

});