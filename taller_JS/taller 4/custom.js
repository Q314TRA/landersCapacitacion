//document.forms[0].campo1 -- referenciacion directa
//document.getElementById("campo1"); -- por indice
//document.querySelector("#campo1") -- dinamica
//document.querySelectorAll("input[id='true']") -- dinamica attributos
// * all
// ^ empieza por
// $ finaliza por
/*


function suma () {
	var valor1 = document.getElementById("campo1");
	var valor2 = document.getElementById("campo2");

	console.log(parseFloat(valor1.value)  + parseFloat(valor2.value))
}

function resta (argument) {

	var valor1 = document.getElementById("campo1");
	var valor2 = document.getElementById("campo2");

	console.log(parseFloat(valor1.value)  - parseFloat(valor2.value))
	// body...
}

function multiplicacion (argument) {
	var valor1 = document.getElementById("campo1");
	var valor2 = document.getElementById("campo2");

	console.log(parseFloat(valor1.value)  * parseFloat(valor2.value))
	// body...
}

function division (argument) {
	var valor1 = document.getElementById("campo1");
	var valor2 = document.getElementById("campo2");

	console.log(parseFloat(valor1.value)  / parseFloat(valor2.value))
	// body...
}





function calculo (_funcion) {
	var valor1 = document.getElementById("campo1");
	var valor2 = document.getElementById("campo2");

	return _funcion(parseFloat(valor1.value), parseFloat(valor2.value))
	
}*/

//////////////////////////////////////////
//function injection
//////////////////////////////////////////

/*function calculo (_funcion) {
	var valor1 = document.getElementById("campo1");
	var valor2 = document.getElementById("campo2");

	return _funcion(parseFloat(valor1.value), parseFloat(valor2.value))	
}

function suma () {	
	console.log(calculo(function  (val, val2) {
		return val + val2;
	})) 
}

function resta () {
	console.log(calculo(function  (val, val2) {
		return val - val2;
	})) 
}

function multiplicacion () {
	console.log(calculo(function  (val, val2) {
		return val * val2;
	})) 
}

function division () {
	console.log(calculo(function  (val, val2) {
		return val / val2;
	})) 
}*/


//////////////////////////////////
//
//////////////////////////////////


function calculo (operator) {
	var valor1 = document.getElementById("campo1");
	var valor2 = document.getElementById("campo2");
	
	console.log(eval(valor1.value + operator + valor2.value ))
}
