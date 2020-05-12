'use strict'
var Gatos="";
for (var current = 1; current<=7 ; current++) {
	for(var i = 1; i<=current ; i++){
		Gatos+="#";
		console.log(Gatos);
	}
	Gatos="";
	console.log("\n");
}
