var modeloClases = {
	clases:{
		clase1:{
			assitente:["alumno1","alumno2","alumno3",],
			noAsistentes:["alumno4","alumno5"],
			alumnos:[
				{
					nombre:"alumno1",
					edad: 12
				},
				{
					nombre:"alumno2",
					edad: 13
				},
				{
					nombre:"alumno3",
					edad: 12
				},
				{
					nombre:"alumno4",
					edad: 10
				},
				{
					nombre:"alumno5",
					edad: 12
				}
			]
		},
		clase2:{
			assitente:["alumno6","alumno7","alumno8","alumno4"],
			noAsistentes:["alumno10"],
			alumnos:[
				{
					nombre:"alumno6",
					edad: 12
				},
				{
					nombre:"alumno7",
					edad: 12
				},
				{
					nombre:"alumno8",
					edad: 12
				},
				{
					nombre:"alumno9",
					edad: 12
				},
				{
					nombre:"alumno10",
					edad: 12
				}
			]
		},
	},
	profesores:{
		profesor1:{
			asignaturas:["Matematicas"],
			clases:["clase1", "clase2"]
		},
		profesor2:{
			asignaturas:["Artes"],
			clases:["clase1"]
		},
		profesor3:{
			asignaturas:["Ciencias"],
			clases:["clase1", "clase2"]
		},
		profesor4:{
			asignaturas:["Sociales"],
			clases:["clase2"]
		}
	}
}


///transformacion de arreglos
modeloClases.clases.clase1.assitente.map(function  (current, indice, obje) {
	return modeloClases.clases.clase1.alumnos.filter(function  (alumno) {
		return alumno.nombre ==  current
	})[0]
})


///recorrer arreglos
modeloClases.clases.clase1.assitente.forEach(function  (current, indice, obje) {
	console.log(current)
})

//transformacion de diccionario a Arreglo
Object.keys(modeloClases.clases).map(function  (nombreClase) {
	var _clase = modeloClases.clases[nombreClase];
	_clase.idClase = nombreClase;
	return _clase;
})


//transformacion o reduccion de el arreglo inicial
modeloClases.clases.clase1.alumnos.reduce(function(custom, current, index, _alumnos){
	return custom + (current.edad == 12? 1:0)
}, 0)




//alumnos que asistieron a las clases del profesor 1
modeloClases.profesores.profesor1.clases.map(function(nombreClase){
    return modeloClases.clases[nombreClase].assitente
})

///deatalle de los alumnos que asisteron a las clases de profesor 1
modeloClases.profesores.profesor1.clases.map(function(nombreClase){
	return {
		nombreClase: nombreClase,
		alumnos: modeloClases.clases[nombreClase].assitente.map(function(nombreAlumno){
                    return  modeloClases.clases[nombreClase].alumnos.filter(function(alumno){
                        return alumno.nombre == nombreAlumno
                    })[0]
                })
	}
})