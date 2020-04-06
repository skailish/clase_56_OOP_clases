//PROGRAMACION ORIENTADA A OBJETOS

//Es un paradigma de programacion, de los tres que vimos:
//Funcional: se usan funciones puras.No se permiten funciones que tengan efectos secundarios, y, cuando son necesarios los hace con atajos a traves de funciones puras que permitan efectos secundarios. Es algo muy academico y tradicional... ||| lenguajes que utilizan este paradigma: ELM, LISP, funciones lambda (x=>x*2)

//Imperativo: programar usando todas las instrucciones de control (if/else/else if, bucles)

// OOP (programacion orientada a objetos): es el paradigma mas expandido/conocido/utilizado. La utilizan lenguajes mas populares: Java, PHP, C#. Consiste en que todo es un objeto, todo se trata de representar como objetos. Las unidades basicas de trabajo son objetos.
//JavaScript es un lenguaje multiparadigmatico

const persona = {
  nombre: "Ada",
  apellido: "Lovelace",
  nacionalidad: "Inglesa",
  nacimiento: new Date(1815, 11, 10)
};
//Si quiero hacer otro objeto igual. Ej tengo un registro de usuario y tengo que crear muchas personas

//Cuando necesitamos muchas versiones de un objeto se usa algo llamado "clases"

//Clases
//Una clase se define con la palabra "class", y por convencion se escribe con PascalCase (para indicar que es una clase y no una variable). Dentro se definen las propiedades que va a tener
//Es una abstraccion, es como una plantilla, molde o plano de algo. No existe, comienza a existir cuando creamos una version de ella (instanciar una clase).
//La clase de la persona viene a ser el concepto de la persona, no es una persona.
//Es una idea de algo que tiene que tener ciertas propiedades y ciertos metodos. Pero no existe hasta que no creamos/instanciamos versiones de ella
//Una instancia se crea con la palabra new. ///Cada instancia es algo independiente, por mas que compartan concepto general
//Funcion constructora es una funcion que se ejecuta cuando se instancia una clase. Los parentesis llaman primero a la funcion constructora
//Para agregarle propiedades
//this representa la instancia sobre la que estoy trabajando. Puede dentro de si misma acceder a sus propiedades. Es una forma de referenciarse a si mismo
//
class Persona {
  constructor(nombre, apellido, nacimiento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
  }
}

const ada = new Persona("Ada", "Lovelace", new Date(1815, 11, 10)); //lo primero que se ejecuta es la funcion constructora
const juana = new Persona("Juana", "Garcia", new Date(1990, 1, 10));

//La potencia de las clases no es solo tener propiedades sino tbn metodos. Son funciones que estan en propiedades. Es una funcion asignada a una propiedad de un objeto, Es una funcion que puede ejecutar un objeto.
//Para definirla:
class Persona {
  constructor(nombre, apellido, nacimiento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
  }
  saludar = (saludo = "Hola") => {
    console.log(`${saludo}, soy ${this.nombre}!`);
  };
}

//Una vez que tengo un objeto construido, puedo acceder a sus metodos con notacion de punto
//Cada instancia va manteniendo sus propios datos y puede realizar acciones

ada.saludar("Saludos");

const saludo = ada.saludar("Saludos");

//los metodos son funciones dentro de propiedades.
//Una clase contiene:
//*Una funcion constructora
//*Propiedades
//*Metodos

//Una clase representa una unica cosa y todas las propiedades y metodos que podamos hacer con esa clase tienen que estar ligados a esa cosa. Cada clase solo tiene que encargarse de sus propias responsabilidades
//Encapsulacion: todo lo que este dentro de la clase no puede ser accesible desde afuera y no nos tiene que importar. Una vez definida, la implementacion no nos tiene que interesar. Solo me tiene que importar que parametros necesito pasarle para que funcione y el resultado que espero
//Principio de unica responsabilidad: representa una unicada, todo lo que hagamos asociado a ella tiene que estar relacionado

//Para que no se puedan modificar propiedades desde afuera se usan propiedades privadas. Comienzan con el signo de numeral, se definen antes del constructor
//Si quiero ver un dato tengo que crear un metodo que se denomina getters
//Si queremos modificar esos valores tenemos que crear funciones que se llaman setters

class Persona {
  #nombre;
  #apellido;
  #nacimiento;
  #dinero;
  constructor(nombre, apellido, nacimiento) {
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#nacimiento = nacimiento;
    this.#dinero = 1000;
  }
  saludar = (saludo = "Hola") => {
    console.log(`${saludo}, soy ${this.#nombre}!`);
  };
  trabajar = () => {
    this.#dinero += 100;
  };
  //getters
  obtenerDinero = () => {
    return this.#dinero;
  };
  //setters
  modificarDiner = monto => {
    if (monto > 0) {
      this.#dinero = monto;
    }
  };
}

//tambien pueden existir metodos privados, porque queremos dentro de la clase hacer operaciones que sirvan para otros metodos y no queramos que se puedan acceder desde afuera

class Persona {
  #nombre;
  #apellido;
  #nacimiento;
  #dinero;
  constructor(nombre, apellido, nacimiento) {
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#nacimiento = nacimiento;
    this.#dinero = 1000;
  }
  //metodos privados

  #descontarImpuesto = monto => {
    return monto - 100;
  };

  //metodos publicos
  saludar = (saludo = "Hola") => {
    console.log(`${saludo}, soy ${this.#nombre}!`);
  };
  trabajar = () => {
    this.#dinero += 100;
  };
  //getters
  obtenerDinero = () => {
    const montoFinal = this.#descontarImpuesto(this.#dinero);
    return montoFinal;
  };
  //setters
  modificarDinero = monto => {
    if (monto > 0) {
      this.#dinero = monto;
    }
  };
}

//En el caso de las clases van a existir metodos que van a servir para modificar las propiedades de las clases pero que ejecutandolos por fuera no nos van a devolver nada

// * imperativo -> if/else/else if, for/while, C
// * funcional -> elm, lisp,
// * OOP object oriented programing - programacion orientada a objetos
// * Java
// * PHP
// * C#

// * Clases

// * camelCase
// * PascalCase

// * Clase
// * Una función constructora
// * Propiedades
// * Métodos

// * Principio de única responsabilidad
// * Encapsulación

class Persona {
  // Propiedades o campos privados
  #nombreCompleto;
  #nacimiento;
  // Campo privado con valor inicial
  #dinero = 1000;

  constructor(nombre, apellido, nacimiento) {
    // this representa la clase y nos permite acceder a sus propios métodos y propiedades
    this.#nombreCompleto = {
      nombre,
      apellido
    };
    this.#nacimiento = nacimiento;
  }

  // Métodos privados
  #descontarImpuesto = monto => {
    return monto - 100;
  };

  // Métodos públicos
  saludar = (saludo = "Hola") => {
    return `${saludo}, soy ${this.#nombreCompleto.nombre}!`;
  };
  trabajar = () => {
    this.#dinero += 100;
  };

  // getters
  // permite obtener el valor de un campo privado
  obtenerNombreCompleto = () => {
    return {
      ...this.#nombreCompleto
    };
  };
  obtenerDinero = () => {
    const montoFinal = this.#descontarImpuesto(this.#dinero);
    return montoFinal;
  };

  // setters
  // permite modificar el valor de un campo privado
  modificarDinero = monto => {
    if (monto > 0) {
      this.#dinero = monto;
    }
  };
}

const ada = new Persona("Ada", "Lovelace", new Date(1815, 11, 10));

ada.saludar();
