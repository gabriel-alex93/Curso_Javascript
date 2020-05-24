var bicicleta={
	color: 'Rojo',
	modelo: 'BMX',
	frenos: 'De disco',
	velocidadMaxima: '60km',
	function: function(nuevo_color){
		this.color()=nuevo_color;
		console.log(this);
	}

};

console.log(bicicleta);

biciclet.cambiaColor("Azul");