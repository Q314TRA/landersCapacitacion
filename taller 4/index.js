// var persona = {
// 	nombre : "miguel",
// 	callar : function  (argument) {
// 		console.log("me callo")
// 	},
// 	hablar: function  () {
// 		this.callar();
// 		console.log(this.nombre)
// 	}
// }

// desarrolladores.antioquia



 var modelDesarrollaroes = (function  () {
	
	var desarrolladores = {
		antioquia: [
		{
			nombre: "Miguel",
			cargo:"Developer",
			abilidades:[
			"HTML5",
			"JS",
			"TS",
			"Angular"
			]
		},
		{
			nombre: "Andres",
			cargo:"Developer",
			abilidades:[
			"HTML5",
			"JS",
			"TS",
			"Angular"
			]
		},
		{
			nombre: "carlos",
			cargo:"Developer",
			abilidades:[
			"HTML5",
			"JS",
			"TS",
			"Angular"
			]
		},
		{
			nombre: "juan",
			cargo:"Developer",
			abilidades:[
			"HTML5",
			"JS",
			"TS",
			"Angular"
			]
		},
		{
			nombre: "pedro",
			cargo:"Developer",
			abilidades:[
			"HTML5",
			"JS",
			"TS",
			"Angular"
			]
		}
		],
		amazonas: [],
		quindio: []
	}

	return {
		getByLacation: function(region){
			return desarrolladores[region]
		}
	}

})()







// this.callar();
// console.log( persona.hablar() );



