(function(){
	// Variables
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");

	// Funciones
	var agregarTarea = function(){
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);

		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}

		// Le damos el contenido al enlace
		enlace.appendChild(contenido);
		// Agregamos un atributo href
		enlace.setAttribute("href", "#");
		// Le damos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		// Código que agrega la nueva tarea a la lista
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";

		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}

	};
	var comprobarInput = function(){
		tareaInput.className = "";
		teareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};

	var eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};

	// Eventos

	// Agrega Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);

	// Comprueba Input
	tareaInput.addEventListener("click", comprobarInput);

	// Borra Elementos de la lista
	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eleminarTarea);
	}
}());