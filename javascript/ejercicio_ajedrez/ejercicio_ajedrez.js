'use strict'
var cadena="";
var cadenaPar="# # # #";
for (var i = 0; i<8 ; i++) {
	if(i%2==0){
		for(var j = 0; j<8 ; j++){
			if (j%2==0){
				cadena+="#";
			}
			else{
				cadena+=" ";
			}
		}
	}
	else{
		for(var j = 0; j<8 ; j++){
			if (j%2==0){
				cadena+=" ";
			}
			else{
				cadena+="#";
			}
		}

	}
	cadena+="\n";
}
console.log(cadena);


