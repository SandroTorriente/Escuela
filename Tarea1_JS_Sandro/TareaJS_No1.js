let proyectos = []
class ProyectoConstruccion {
	constructor(id, nombre, ubicacion, presupuesto){
		this.id = id;
		this.nombre = nombre;
		this.ubicacion = ubicacion;
		this.presupuesto = presupuesto;
	}
}

 function crearptoyectos(id, nombre, ubicacion, presupuesto) {
	let PC = new PoyecProyectoConstruccion(id, nombre, ubicacion, presupuesto)
	proyectos.push(PC)
}

function eliminarproyecto(proyectos, id) {
  for (let i = 0; i < proyectos.length; i++) {
    if (proyectos[i].id === id) {
      proyectos.splice(i, 1);
    }
  }
}

function actualizar (id, nombre, ubicacion, presupuesto) {
	for (let i = 0; i < proyectos.length; i++){
		if(proyectos[i].id === id) {
			proyectos[i].nombre = nombre;
			proyectos[i].ubicacion = ubicacion;
			proyectos[i].presupuesto = presupuesto;
			
		}
	}
	
}

function rango (minP, maxP) {
	let proyectosfiltrados = []
	for (let i = 0; i < proyectos.length; i++) {
		let pres = proyectos[i].presupuesto;
		if(pres >= minP && pres <= maxP){
			proyectosfiltrados.push(proyectos[i]);
		}
	}
	console.log(proyectosfiltrados);
}