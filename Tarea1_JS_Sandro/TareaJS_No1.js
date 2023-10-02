let proyectos = [
	{
		"id": "0294618",
		"nombre": "Vinland",
		"ubicacion": "1era y 3era",
		"presupuesto": 25000
	},
	{
		"id": "1849502",
		"nombre": "ProyectD",
		"ubicacion": "Ave. 5ta y Los leones",
		"presupuesto": 42000
	},
	{
		"id": "6123027",
		"nombre": "Hokai",
		"ubicacion": "105 entre 120 y 6ta",
		"presupuesto": 12000
	}
]
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
