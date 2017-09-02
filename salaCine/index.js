var appCine = (function  () {

	var db = {
		dbName : "procinal",
		dbVersion: 1
	}
	
	init = () => {
		db.database = indexedDB.open(db.dbName, db.dbVersion);
		db.database.onsuccess = initContext;
		db.database.onupgradeneeded = initDatabase;
	}

	initContext = (context) =>{
		db.context = context.target.result;
	}

	initDatabase = (context) => {
		db.context = context.target.result;
		// se definen los almacenes de informacion
		let salas = db.context.createObjectStore(["sala"], {keyPath: "id", autoIncrement: true});
		salas.onsuccess = () => {
			almacenar("sala", {
				sillas : [1,3,2,4,5,6,7,8,9,10,11,12,13,14]
			});
		}

		let peliculas = db.context.createObjectStore(["pelicula"], {keyPath: "id", autoIncrement: true});;
		peliculas.onsuccess = () => {
			almacenar("pelicula", {
				nombre:"planeta de los simios",
				genero: ["suspeso", "ciencia ficcion", "romanse"],
				duracion: 135
			});
		}
		
		db.context.createObjectStore(["funcion"], {keyPath: "id", autoIncrement: true});
	}

	getSalas = () =>{
		consultar("sala", (item)=>{
			console.log("sala",item );
		})		
	}

	getPeliculas = () =>{
		consultar("pelicula", (item)=>{
			console.log("pelicula", item);
		})		
	}


	consultar = (factor, fn) => {
		let transact = db.context.transaction([factor], "readonly");
		let almacen =transact.objectStore(factor);

		let items = almacen.openCursor();
		items.onsuccess = (context) =>{
			let cursor = context.target.result;
			if (cursor) {
				fn(cursor);
			};
		}
	}

	almacenar = (factor, item) =>{
		let transact = db.context.transaction([factor], "readwrite");
		let almacen =transact.objectStore(factor);
		almacen.put(item);
	}



	return {
		init: init,
		getSalas: getSalas,
		getPeliculas: getPeliculas
	}

})()

appCine.init();