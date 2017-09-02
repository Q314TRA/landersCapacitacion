var app= (function  () {

	let db = {
		dbName: "personas",
		dbVersion:1,
		contexto: null
	}

	init = ()=>{
		db.database = indexedDB.open(db.dbName, db.dbVersion);
	}

	initDefinition = (context) => {
		db.contexto = context.target.result;
		//la creación del objeto.
		db.contexto.createObjectStore("persona", {keyPath: "id", autoIncrement: true});
	}

	init = (context) => {

	}

	return {
		init: init
	}
})();


//app

app.init();



/*

var --> variables globales
let --> variables locales

1. crear la base de datos.


*/