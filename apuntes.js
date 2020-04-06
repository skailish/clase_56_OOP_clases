//* OOP

/// un objeto con las propiedades
const persona = {
  nombre: "Ada",
  apellido: "Lovelace",
  nacionalidad: "Inglesa",
  nacimiento: new Date(1815, 11, 10)
}

// quiero hacer un objeto igual, trabajar con muchas personas.. que tengan la misma estructura
// puedo: 
// - copiar y pegar, declarar otra persona, cambiarle los valores...
// PROBLEMAS: repetimos código, podemos equivocarnos al escribir una propiedad y no nos va a avisar en el momento, no nos va a saltar error.. /// ES IMPRACTICO NOSIRVE// cuando necesitamos mas versiones de una misma cosa...
// - crear una función que cree el objeto, const crearPersona = (nombre, apellido, nacionalidad, nacimiento) => return {nombre, apellido, nacionalidad, nacimiento} (DEVUELVE LO QUE METO EN LOS PARÁMETROS, QUE DEBE SER LO QUE QUIERO QUE VAYA COMO VALORES DE LAS PROPIEDADES)
const crearPersona = (nombre, apellido, nacionalidad, nacimiento) => { return { nombre, apellido, nacionalidad, nacimiento } };
const ada1 = crearPersona("Ada", "Lovelace", "Inglesa", new Date(1815, 11, 10)); //// simplifico el proceso de crear una persona, no repito código, me aseguro que el objeto devuelto sea siempre el mismo (que tenga las mismas propiedades).. puedo hacer otras operaciones antes de crear el objeto... 
// existe una forma de hacerlo MÄS PRACTICO: CLASES

// CLASES: se define con la palabra class (lo que viene a continuación, es una clase), se usa PascalCase todas las primeras letras de las palabras en mayúscula... 
//* TIENEN TRES PARTES:
//* 1. una función cosntructora
//* 2. Propiedades
//* 3. Métodos

class Persona { // no usa "=" ||| no es nada, es una plantilla... no existe hasta que no se "instancia"/ se utiliza...
  /// es la función que se ejecuta cuando uso el new Persona() para crear una persona..... sucede todo lo que está dentro de esta función constructora.
  constructor(nombre, apellido, nacimiento) { // como es una función, le puedo pasar parámetros
    this.nombre = nombre /// this representa a "este objeto"... this.nombre: lapropiedad nombre de este obj
    this.apellido = apellido
    this.nacida = nacimiento
  }
  // las clases pueden tener METODOS, que son funciones asignada a una propiedad, una funciòn que puede ejecutar un objeto
  saludar = (saludo) => { // al hacerlo con notación de flecha, me permite usar el this referido a ESTE OBJETO
    console.log(`${saludo}, soy ${this.nombre}`)

  }
}


// encapsulación

class PersonaPrivada { /// HAY QUE HACERLAS PRIVADAS PARA QUE NO SE ACCEDA DESDE CUALQUIER LADO
  #nombre
  #apellido
  #nacimiento
  #dinero
  constructor(nombre, apellido, nacimiento) {
    this.#nombre = nombre
    this.#apellido = apellido
    this.#nacimiento = nacimiento
    this.#dinero = 1000
  }
  //métodos públicos
  saludar = (saludo) => {
    console.log(`${saludo}, soy ${this.#nombre}`)
  }
  trabajar = () => {
    this.#dinero += 100 // gano 100 solo si trabajo
  }
  //métodos privados
  #descontarImpuesto = monto => {
    return monto - 100
  }

  // getters
  // como ahora es todo privado, no puedo acceder desde afuera, para poder acceder TENGO QUE CREAR UN METODO QUE ME PERMITA HACERLO
  obtenerDinero = () => {
    const montoFinal = this.#descontarImpuesto(this.#dinero)
    return this.#dinero
  }
}


const ada = new PersonaPrivada("Ada", "Lovelace", new Date(1815, 11, 10)) /// así instanciamos una clase, tomamos la "plantilla", y creamos una persona nueva, completamente distinta de otra
const juana = new PersonaPrivada("Juana", "López", "Argentina") // otra persona distinta ada === juana FALSE



ada.saludar("QuíHacé")
juana.saludar("Holis")