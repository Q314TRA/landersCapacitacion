var contactos =(function  (argument) {
	
	var configDB = {
		nombre: "BDPruebaContactos2",
		version: "1.2",
		descripcion:"base de datos ejercicio dummy",
		size: 5*1024*1024
	}

	var concect = function(aproved, reject){
		configDB.DB = openDatabase(
			configDB.nombre, configDB.version,configDB.descripcion, configDB.size ,
			function (tx) {
				alert("La base de datos se abrio");
				initDatabase(aproved);
			}); 
	}


	var initDatabase = function(aproved ){
		configDB.DB.transaction(function(tx) {
			tx.executeSql("create table if not exists persona("+
				"Nombre Varchar(200),"+
				"Direccion Varchar(100),"+
				"Telefono Varchar(15),"+
				"Documento Varchar(20)"+
				")",[]);

			aproved("se creo la base de dato")
		});
	}


	var guardar = function(data){
		
		configDB.DB.transaction(function(tx) {
			tx.executeSql("INSERT INTO persona  VALUES (?,?,?,?)", [
				data.nombre,data.direccion,data.telefono,data.documento
				], function(tx){
					alert("datos insertados")
				});

		});
	}

	var eliminar = function(documento){
		
		configDB.DB.transaction(function(tx) {
			tx.executeSql("delete from persona where documento = ?", [documento], function(tx){
				alert("datos eliminados")
			}, function  (obj, m) {
				console.log(m)
			});

		});
	}

	var consultar = function(){
		configDB.DB.transaction(function(tx) {
			tx.executeSql("Select * from persona", [], function  (tx, rs) {
				$("#tblPersonas *").remove();
				Object.keys(rs.rows).forEach(function(key){
					var tr = $("<tr/>", {
						"data-documento": rs.rows[key].Documento,
						"onclick" : `contactos.eliminar('${rs.rows[key].Documento}')`
					});
					tr.append($("<td/>").html(rs.rows[key].Nombre));
					tr.append($("<td/>").html(rs.rows[key].Direccion));
					tr.append($("<td/>").html(rs.rows[key].Telefono));
					tr.append($("<td/>").html(rs.rows[key].Documento));
					$("#tblPersonas").append(tr);
				}) 

			});
		});
	}

	return {
		init : function(){
			// la implementacion de promesas se utiliza para la gestion de respuestas asincronas
			return new Promise(concect);	
		} ,
		guardar: guardar,
		consultar: consultar,
		eliminar: eliminar
	}
})();


contactos.init().then(function  (mensaje) {
	alert(mensaje)
	// ejecuciones al momento de la creacion de la base de datos
	contactos.guardar({
		nombre : "miguel",
		direccion: "#",
		telefono : "4553434",
		documento : "1110538451"
	})
});

$(document).ready(function  (argument) {

	$("#btnGuardar").on("click", function(){
		contactos.guardar({
			nombre : $("#txtNombre").val(),
			direccion: $("#txtDireccion").val(),
			telefono : $("#txtTelefono").val(),
			documento : $("#txtDocumento").val()
		})
		contactos.consultar();
	});

})

contactos.consultar();


// contactos.consultar()

// contactos.guardar({
// 	nombre : "miguel",
// 	direccion: "#",
// 	telefono : "4553434",
// 	documento : "1110538451"
// })