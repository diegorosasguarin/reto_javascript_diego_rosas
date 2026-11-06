
const usuario = {
  nombre: "Maria",
  apellido: "Gomez",
  edad: 25,
  direccion: {
    calle: "Calle Zona franca",
    ciudad: "Bogota",
    pais: "Colombia"
  }
};

const { ciudad, pais } = usuario.direccion;


function presentarse() {
  return `Hola, soy ${this.nombre} ${this.apellido}, tengo ${this.edad} 
años y vivo en ${ciudad}, ${pais}.`;
}


console.log(presentarse.call(usuario));





