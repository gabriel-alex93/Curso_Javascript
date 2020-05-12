'use strict'
function esPar(n){

	if(n==0){
		return true;
	}
	else if(n==1){
		return false;
	}
	else{
		
		esPar(n-2);
	}

}

console.log(esPar(0));
console.log(esPar(1));
console.log(esPar(3));
console.log(esPar(75));
