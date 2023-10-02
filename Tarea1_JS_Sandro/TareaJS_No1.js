class Constructora {
  constructor(name, proyectos, agregarptoyectos, actualizar, eliminarproyecto, rango){
    this.name = name;
    this.proyectos = proyectos;
    this.agregarptoyectos = function(ProyectoConstruccion) {
	 	proyectos.push(ProyectoConstruccion)};
  this.eliminarproyecto = function(ProyectoConstruccion) {
  for (let i = 0; i < proyectos.length; i++){
    if (proyectos[i].id === ProyectoConstruccion.id) {
      proyectos.splice(i, 1);
    }
  }
};
this.actualizar = function(ProyectoConstruccion) {
	for (let i = 0; i < proyectos.length; i++){
		if(proyectos[i].id === ProyectoConstruccion.id) {
			proyectos[i].nombre = ProyectoConstruccion.nombre;
			proyectos[i].ubicacion = ProyectoConstruccion.ubicacion;
			proyectos[i].presupuesto = ProyectoConstruccion.presupuesto;
			
		}
	}	
};
this.rango = function(minP, maxP) {
	let proyectosfiltrados = []
	for (let i = 0; i < proyectos.length; i++) {
		let pres = proyectos[i].presupuesto;
		if(pres >= minP && pres <= maxP){
			proyectosfiltrados.push(proyectos[i]);
		}
	}
  proyectos = proyectosfiltrados;
};

  }


}
class ProyectoConstruccion {
	constructor(id, nombre, ubicacion, presupuesto){
		this.id = id;
		this.nombre = nombre;
		this.ubicacion = ubicacion;
		this.presupuesto = presupuesto;
	}
}







const PC1 = new ProyectoConstruccion('1234567', 'Vinland', 'Habana Vieja', 10000);

const constructora = new Constructora('Beimax', proyectos);

constructora.agregarptoyectos(PC1);

