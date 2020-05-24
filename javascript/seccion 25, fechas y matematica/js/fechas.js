var fecha = new Date();

var year = fecha.getFullYear();
var mes =  fecha.getMonth();
var dia = fecha.getDay();
var hora = fecha.getHours();


var textoHora= `
	El año es : ${year} 
	El mes es : ${mes}
	El día es : ${dia}
	El hora es : ${hora}
`;
console.log(textoHora);
