// Enviando funcion anonima
document.querySelector("#btnsuma").addEventListener("click",function(){
	calculo ("+");
}, false)

document.querySelector("#btnresta").addEventListener("click",function(){
	calculo ("-");
}, false)

document.querySelector("#btnmultiplicacion").addEventListener("click",function(){
	calculo ("*");
}, false)

document.querySelector("#btndivision").addEventListener("click",function(){
	calculo ("/");
}, false)



/*//encapsulando la declaraciones
document.querySelector("#btnsuma").addEventListener("click",(function(){
	calculo ("+");
}), false)


// enviando una funcion anonima
var fn = function(){
	calculo ("+");
}
document.querySelector("#btnsuma").addEventListener("click",fn, false)


//enviando una function
function fn(){
	calculo ("+");
}
document.querySelector("#btnsuma").addEventListener("click",fn, false)


// no se debe hacer de esta forma
document.querySelector("#btnsuma").addEventListener("click",(function(){
	calculo ("+");
})(), false)
*/