'use strict'
 

//tranfromacion de textos 

var numero = 444;
var texto1 = "Bienvenido al curso de javascript";
var texto2 =  "muy buen curso";

var dato = numero.toString();// el numero se tranforma en texto
	dato = texto1.toUpperCase();// convierte texto a mayuscula
	dato = texto2.toLowerCase();// minuscula
console.log(dato);
// calcular longitud de un texto

var nombre = "";
	nombre = ["hola"," hola"]
console.log(nombre.length);//calcula largo de cadena y cosas en general(sin parentesis!!)

//concatenar unir texto

var textoTotal = texto1 + " " + texto2;
var textoTotal = texto1.concat(" "+ texto2);//otra opcion para concatenar
console.log(textoTotal);


// busqueda de palabras
var busqueda = texto1.indexOf("curso"); //busca en texto 1 la palabra curso(primer aparicion) retorna el numero del caracter donde se encuentra la palabra
    busqueda = texto1.lastIndexOf("curso"); // ultima aparicion(si no aparece retornara -1 )
    busqueda = texto1.search("curso");// lo mismo que indexOf
    busqueda = texto1.match("curso");//
    busqueda = texto1.match(/curso/gi);//busca todas las incidencias que tienen que ver con la palabra
    busqueda = texto1.substr(14,5);// devuelve los 5 carateres siguientes a partir del caracter 14 del string
    busqueda = texto1.charAt(14);// devuelve el caracter que hay en la posicion 14
    busqueda = texto1.startsWith("Bi"); // buscar al inicio del texto devuelve si existe la palabra o no
    busqueda = texto1.endsWith("pt");
    busqueda = texto1.includes("javascript");//devuelve true o false si existe o no la palabra exactamente
    //mas funciones de texto
    busqueda = texto1.replace("javascript", "symfony");//reemplazar el texto del argumento 1 por el texto del argumento 2
    busqueda = texto1.slice(14,22);//corta el string desde el caracter 1 hacia adelante hasta el 22(tambien se peude ingresar un solo parac¿metro y corta el string desde el caracter 14 hacia adelante)
    busqueda = texto1.split(" ");//mete el texto 1 dentro de un array dependiendo del separador indicado
    busqueda = texto1.trim();//corta los espacios que tenga por delante y por detras del texto
    //
    
console.log(busqueda);// 

