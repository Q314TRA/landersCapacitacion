
var app = (function(){

	var Server = {
		Esquema: {},
		name: "DB1",
		version: "1.0",
		descripcion: "base de datos de prueba",
		size : 5*1024*1024
	}

	var result = [];

	_openDatabase = function(){
		Server.Esquema.DB = openDatabase(Server.name,Server.version,Server.descripcion,Server.size,function (tx) {
			console.log("openDB", "La base de datos se abrio");
			initDB();
		});
	}

	initDB = function () {
		Server.Esquema.DB.transaction(function(tx) {
			tx.executeSql(`create table if not exists persona(
				Nombre Varchar(200),
				Direccion Varchar(100),
				Telefono Varchar(15),
				Documento Varchar(20))`,[]);
		});
	}

	search = function  (resolve, reject) {
		Server.Esquema.DB.transaction(function  (tx) {
			tx.executeSql("Select * from persona", [], function  (tx,rs) {
				resolve(rs.rows); 
			}, function(e, b){ reject(b) });
		})
	}

	save = function  (resolve,reject,data) {
		Server.Esquema.DB.transaction(function  (tx) {
			tx.executeSql("INSERT INTO persona  VALUES ( ? , ? , ? , ? )", 
				[data.nombre,data.direccion,data.telefono,data.documento], function(tx){
					resolve("saved")
				}, function(e,b){ reject(b) })
		})
	}

	definePromise = function(fn){
		return new Promise(() => {
			search(resolve, reject)
		});
	}

	return {
		init: _openDatabase,
		buscar:  function  () {
			return new Promise(search);
		},
		guardar: function (data) {
			return new Promise(function  (resolve, reject) {
				save(resolve, reject, data);
			})
			
		}
	}
})();

app.init();
// app.buscar.then((successMessage) => {
// 	console.log(successMessage)
// });
// app.guardar({
// 	nombre : "Miguel",
// 	direccion : "·",
// 	telefono : "1234",
// 	documento: "6456456456"
// }).then((successMessage) => {
// 	console.log(successMessage)
// });
