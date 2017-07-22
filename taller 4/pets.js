var modelPets = (function  () {

	var pets = {
		pitbull:[
		{
			nombre:"tony",
			dueno:"miguel",
			costo:800,
			enfermedades:[
			"polio", "rabia", "pulgas"
			]
		},{
			nombre:"copo de nieve",
			dueno:"pepe",
			costo:700,
			enfermedades:[
			"polio", "pulgas"
			]
		},{
			nombre:"trosky",
			dueno:"ruben",
			costo:750,
			enfermedades:[
			"pulgas"
			]
		}
		],
		bulterrier:[
		{
			nombre:"trosky",
			dueno:"ruben",
			enfermedades:[
			"pulgas"
			]
		}
		],
		pastores:[
		{
			nombre:"copo de nieve",
			dueno:"pepe",
			enfermedades:[
			"polio", "pulgas"
			]
		}
		],
		indefinida:[
		{
			nombre:"asesino",
			dueno:"ruben",
			enfermedades:[
			"pulgas"
			]
		}
		]
	};

	return {
		getByRaza: function(raza){
			return pets[raza]
		},
		getBycountRaza: function(raza){
			return pets[raza].reduce(function(custom, pet){
				return custom + pet.costo;
			}, 0)
		},
		getBySick:function(enfermedad){
			//todas las llaves pertenecientes a un diccionario 
			return Object.keys(pets).map(function(key) {
				return pets[key]
			}).reduce(function(custom, pets, index){
				return custom.concat(pets)
			},[]).filter(function(pet){
				return pet.enfermedades.indexOf(enfermedad) > -1; 
			})

			// .reduce(function(custom, equipo, index){
			// 	return (index == 0 | custom > equipo.tiempo) ? equipo.tiempo : custom;     
			// },0)

		}
	}
	
})()
