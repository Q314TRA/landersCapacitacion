var app = (function() {

	let db = {
		dbName:"personas4",
		dbVersion:1,
		contexto: null
	}

	let nombre = document.getElementById('nombre'); 
	let apellido = document.getElementById('apellido'); 
	let direccion = document.getElementById('direccion'); 

	init = () => {
		db.database = indexedDB.open(db.dbName, db.dbVersion);
		db.database.onsuccess = initDefinition;
		db.database.onupgradeneeded = initFactors;
	}

	initDefinition = (context) => {
		db.contexto = context.target.result;
	}

	initFactors = (context) =>{
		db.contexto = context.target.result;
		db.contexto.createObjectStore("persona", { keyPath: "id", autoIncrement:true });	
	}

	guardar = () =>{
		let transact =  db.contexto.transaction(["persona"], "readwrite");
	
		let factor = transact.objectStore("persona");

		factor.put({
			nombre: {nombre: nombre.value} ,
			apellido: apellido.value,
			direccion: direccion.value,
			id: ["s", "22"] 
		})
	}

	listar = () => {
		let transact =  db.contexto.transaction(["persona"], "readonly");
	
		let factor = transact.objectStore("persona");

		let item = factor.get(1);

		item.onsuccess = ()=>{
			console.log(item.result);
		}

		let cursor = factor.openCursor();	
		cursor.onsuccess = render;
			
	}
	render = (context)=>{
		let cursor  = context.target.result;
		if (cursor) {
			console.log(cursor);
			cursor.continue();
		}
	}


    return {
		init: init,
		guardar: guardar,
		listar: listar
    };

})();

app.init();