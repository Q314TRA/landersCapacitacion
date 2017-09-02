var app = (function  () {

	conf = {
		databaseName : "Clientes3",
		version: 2
	};

	tblDatos = $("#tblDatos");

	btnGuardar = $("#btnGuardar");
	btnBuscar = $("#btnBuscar");
	btnEliminar = $("#btnEliminar");
	
	txtClave = $("#clave");
	txtTitulo = $("#titulo");
	txtAño = $("#año");

	
	init = ()=>{
		btnGuardar.on("click", this.guardar);
		btnBuscar.on("click", this.buscar);
		btnEliminar.on("click", this.eliminar);

		this.conf.dbDefinition = indexedDB.open(this.conf.databaseName, this.conf.version);
		this.conf.dbDefinition.onsuccess = this.initDB;
		this.conf.dbDefinition.onupgradeneeded = this.createStore;
	}

	createStore = (e)=>{
		this.conf.db  = e.target.result;
		var objectStore = this.conf.db.createObjectStore("toDoList", { keyPath: "id", autoIncrement:true });
		objectStore.createIndex("codigo", "codigo", { unique: false });
	}

	initDB = (e) =>{
		this.conf.db  = e.target.result;
	}


	

	guardar = (event) => {

		let transaction = this.conf.db.transaction(["toDoList"], "readwrite");
		let almacen =transaction.objectStore("toDoList");

		let agregar = almacen.put({
			codigo: this.txtClave.val() ,
			titulo: this.txtTitulo.val(),
			anio: this.txtAño.val()
		});

		console.log(agregar);
		agregar.onsuccess  = listar; 
	}

	listar = () => {

		tblDatos.html("");

		let transaction = this.conf.db.transaction(["toDoList"], "readonly");
		let almacen =transaction.objectStore("toDoList");

		let cursor = almacen.openCursor();
		console.log(cursor)
		cursor.onsuccess  = render;


	}

	render= (e)=>{
		let cursor = e.target.result;

		if(cursor){
			let fila = $("<tr/>");
			fila.append($("<td/>").html(cursor.value.id));
			fila.append($("<td/>").html(cursor.value.titulo));
			fila.append($("<td/>").html(cursor.value.anio));
			tblDatos.append(fila);

			cursor.continue();
		}
	}


	eliminar = () => {
		let transaction = this.conf.db.transaction(["toDoList"], "readwrite");
		let almacen =transaction.objectStore("toDoList");
		let deleting = almacen.delete(this.txtClave.val());

		deleting.onsuccess  = render;
	}

	buscar = () =>{
		let transaction = this.conf.db.transaction(["toDoList"], "readwrite");
		let almacen =transaction.objectStore("toDoList");
		let findingElement = almacen.get(1);

		findingElement.onsuccess = (e) =>{
			console.log(findingElement.result);
			console.log(e);
		}
	}



	return {init}

})();


$(document).ready(function  (argument) {
	app.init();
	
});
