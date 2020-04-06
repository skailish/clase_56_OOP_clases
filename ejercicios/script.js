// Programación orientada a objetos
// Crear las siguientes clases con sus respectivos métodos y propiedades.Usar propiedades privadas.Cuando se devuelvan valores, si son objetos y arrays de las propiedades, devolver copias de los mismo, para evitar que puedan ser modificados.

//   Calculadora
// Propiedades
// resultado(número), inicializa en 0
// Métodos
// sumar(numero): suma numero a resultado, y actualiza resultado con el valor de dicha operación
// restar(numero): suma numero a resultado, y actualiza resultado con el valor de dicha operación
// multiplicar(numero): suma numero a resultado, y actualiza resultado con el valor de dicha operación
// dividir(numero): divide resultado por numero, y actualiza resultado con el valor de dicha operación
// obtenerResultado(): devuelve resultado
// reiniciar(): pone resultado en 0
// Observaciones
// arrojar un error cuando el argumento ingresado no sea un número, con Number.isFinite()
// arrojar un error cuando se intenta dividir por 0


class Calculadora {
  #resultado = 0

  // Métodos
  sumar = numero => {
    if (Number.isFinite(numero)) {
      this.#resultado = this.#resultado + numero
    } else {
      throw new Error(`No es un número válido`)
    }
  }
  restar = numero => {
    if (Number.isFinite(numero)) {
      this.#resultado = this.#resultado - numero
    } else {
      throw new Error(`No es un número válido`)
    }
  }
  multiplicar = numero => {
    if (Number.isFinite(numero)) {
      this.#resultado = this.#resultado * numero
    } else {
      throw new Error(`No es un número válido`)
    }
  }
  dividir = numero => {
    if (Number.isFinite(numero)) {
      if (numero === 0) {
        throw new Error(`No se puede dividir por 0`)
      } else {
        this.#resultado = (this.#resultado / numero)
      }
    } else {
      throw new Error(`No es un número válido`)
    }
  }
  // getter
  obtenerResultado = () => { return this.#resultado }

  // setter
  reiniciar = () => { this.#resultado = 0 }

}

const calculadora = new Calculadora();


// Auto
// Propiedades
// encendido(booleano), inicializa en false
// velocidad(número), inicializa en 0
// marca(string)
// modelo(número)
// patente(string)
// Constructor
// pide como argumentos marca, modelo, patente y los asigna a sus respectivas propiedades
// Métodos
// arrancar() pone encendido en true
// apagar() pone encendido en false
// acelerar() suma 10 a velocidad y actualiza dicha propiedad
// desacelerar() resta 10 a velocidad y actualiza dicha propiedad
// toString() devuelve un string con la siguiente plantilla ${ marca } ${ modelo }, patente ${ patente }
// Observaciones
// sólo se puede acelerar o desacelerar si el auto se encuentra prendido
// sólo se puede apagar el auto si la velocidad es 0
// la velocidad mínima es 0

class Auto {
  #encendido = false
  #velocidad = 0
  #marca
  #modelo
  #patente

  constructor(marca, modelo, patente) {
    this.#marca = marca
    this.#modelo = modelo
    this.#patente = patente
  }

  // Métodos
  arrancar = () => {
    this.#encendido = true
  }
  apagar = () => {
    if (this.#velocidad === 0) {
      this.#encendido = false
    }

  }
  acelerar = () => {
    if (this.#encendido === true) {
      this.#velocidad = this.#velocidad + 10
    }
  }
  desacelerar = () => {
    if (this.#encendido === true && this.#velocidad >= 10) {
      this.#velocidad = this.#velocidad - 10
    }
  }
  // getter
  toString = () => { return `${this.#marca} ${this.#modelo}, patente ${this.#patente}` }

}

const auto = new Auto("Pempos", 1984, "50AAAA")

// Televisor
// Propiedades

// encendido(booleano), inicializa en false
// canal(número), inicializa en 0
// canales(número)
// volumen(número), inicializa en 0
// marca(string)
// Constructor

// pide como argumentos marca y canales y los asigna a sus respectivas propiedades
// Métodos

// prender() pone encendido en true
// apagar() pone encendido en false
// verCanalSiguiente() suma 1 a canal y actualiza dicha propiedad
// verCanalAnterior() resta 1 a canal y actualiza dicha propiedad
// cambiarCanal(canal) actualiza la propiedad canal con el valor del parámetro canal
// subirVolumen() suma 1 a volumen y actualiza dicha propiedad
// bajarVolumen() resta 1 a volumen y actualiza dicha propiedad
// toString() devuelve un string como el siguiente ejemplo:

// Televisor Samsung
//   - Canales: 100
//     - Canal actual: 23
//       - Volumen actual: 34
// Observaciones

// solo se puede modificar el canal y el volumen si el televisor se encuentra prendido
// canales representa el máximo de canales posibles.Si se está en el canal máximo o mínimo(0), y se avanza o retrocede, debe dar toda la vuelta.P.ej.: si el canal máximo es 100, se está en el canal 100, y se avanza de canal, debe volver al 0
// solo se puede cambiar a un canal que exista
// el volumen mínimo es 0 y el máximo 100

class Televisor {
  #encendido = false
  #canal = 0
  #canales
  #volumen = 0
  #marca

  constructor(marca, canales) {
    this.#marca = marca
    this.#canales = canales
  }

  // Métodos
  prender = () => {
    this.#encendido = true
  }
  apagar = () => {
    this.#encendido = false
  }
  verCanalSiguiente = () => {
    if (this.#encendido === true) {
      this.#canal = this.#canal < this.#canales ? this.#canal + 1 : 0
    }
  }
  verCanalAnterior = () => {
    if (this.#encendido === true) {
      this.#canal = this.#canal > 0 ? this.#canal - 1 : this.#canales
    }
  }
  cambiarCanal = (canal) => {
    if (this.#encendido === true) {
      if (canal >= 0 && canal <= this.#canales)
        this.#canal = canal
    }
  }
  subirVolumen = () => {
    if (this.#encendido === true) {
      if (this.#volumen < 100) {
        this.#volumen = this.#volumen + 1
      }
    }
  }
  bajarVolumen = () => {
    if (this.#encendido === true) {
      if (this.#volumen > 0) {
        this.#volumen = this.#volumen - 1
      }
    }
  }
  toString = () => {
    return ` Televisor Samsung
  - Canales: ${this.#canales}
  - Canal actual: ${this.#canal}
  - Volumen actual: ${this.#volumen}`
  }

}

const televisor = new Televisor("Samsung", 100)




// Anotador
// Propiedades

// titulo(string)
// notas(array de strings), inicializa vacío
// Constructor

// pide como argumento titulo y lo asigna a sus respectiva propiedad
// Método

// agregarNota(nota) agrega nota al array de notas
// actualizarNota(id, nota) actualiza el ítem con índice id, reemplazándolo por nota
// obtenerNota(id) devuelve el ítem del array notas con índice id
// eliminarNota(id) elimina de notas el ítem con índice id
// eliminarNotas() borra todos los ítems de notas
// listarNotas() devuelve un string con todas las notas y sus respectivos ids, por ejemplo

// Cosas para hacer
// ------------------------
//   1. Ir al súper
// 2. Ver serie
// 3. Programar
// 4. Leer libro

class Anotador {
  #titulo
  #notas = []

  constructor(titulo) {
    this.#titulo = titulo;
  }

  //Methods
  agregarNota = (nota) => {
    this.#notas.push(nota)
  }
  actualizarNota = (id, nota) => {
    this.#notas[id] = nota
  }
  obtenerNota = (id) => {
    return this.#notas[id]
  }
  eliminarNota = (id) => {
    this.#notas.splice(id, 1)
  }
  eliminarNotas = () => {
    this.#notas = []
  }
  listarNotas = () => {
    let mensaje = `${this.#titulo}\n------------------------\n`
    for (let i = 0; i < this.#notas.length; i++) {
      mensaje += `\n${i + 1}) ${this.#notas[i]}`;
    }
    return mensaje
  }
}

const anotador = new Anotador("Mis tareas de hoy");


// Celular
// Propiedades
// contactos(array de objetos), inicializa vacío
// llamadas(array de strings), inicializa vacío
// Métodos
// agregarContacto(contacto) agrega contacto a contactos
// buscarPorNombre(nombre) devuelve el contacto con dicho nombre en el array contactos o undefined si no lo encuentra
// buscarPorNumero(numero) devuelve el contacto con dicho número en el array contactos o undefined si no lo encuentra
// eliminarContacto(nombre)elimina el contacto con nombrenombredecontactos`
// llamar(nombre) si existe un contacto con nombre nombre en la lista contactos, agrega a llamadas un string que representa un registro de la misma, usando la plantilla `Llamada a ${ nombre } con número ${ numero } realizada
// verContactos() devuelve un string listando todos los contactos, con sus nombres y números
// verHistorial() devuelve un string con la lista de llamadas realizadas
// Observaciones
// contacto es un objeto con las propiedades nombre y numero
// no se puede agregar un contacto si ya existe en el celular alguno con el mismo nombre o número

class Celular {
  #contactos = []
  #llamadas = []

  // Métodos
  agregarContacto = ({ nombre, numero }) => {
    const existe = (contacto, nombre, numero) => {
      return (contacto.nombre === nombre || contacto.numero === numero)
    }
    const chequeo = (this.#contactos).filter(contacto => existe(contacto, nombre, numero))
    if (chequeo.length === 0) {
      this.#contactos = [...this.#contactos, { nombre, numero }]
    }
  }
  buscarPorNombre = (nombre) => {
    const buscar = contacto => contacto.nombre.toLowerCase() === nombre.toLowerCase();
    const contacto = this.#contactos.filter(buscar)
    return contacto.length > 0 ? contacto : undefined
  }
  buscarPorNumero = (numero) => {
    const buscar = contacto => contacto.numero === numero;
    const contacto = this.#contactos.filter(buscar)
    return contacto.length > 0 ? contacto : undefined
  }
  eliminarContacto = (nombre) => {
    const eliminacion = (listaParcial, contacto, nombre) => {
      listaParcial = contacto.nombre === nombre ? [...listaParcial] : [...listaParcial, contacto]
      return listaParcial
    }
    this.#contactos = this.#contactos.reduce((listaParcial, contacto) => eliminacion(listaParcial, contacto, nombre), [])
  }
  llamar = (nombre) => {
    this.#contactos.forEach(contacto => {
      if (contacto.nombre === nombre) {
        this.#llamadas.push(`Llamada a ${nombre} con número ${contacto.numero} realizada`)
      }
    });
  }

  //getter
  verContactos = () => {
    const aString = (string, contacto) => {
      string += `Nombre: ${contacto.nombre}, Teléfono: ${contacto.numero}\n`
      return string
    }
    return (this.#contactos).reduce(aString, "")
  }
  verHistorial = () => {
    const aString = (string, llamada) => {
      string += llamada + "\n"
      return string
    }
    return (this.#llamadas).reduce(aString, "")
  }
}

const telefono = new Celular()


// BilleteraVirtual
// Propiedades
// monto
// operaciones(array de objetos), inicializa vacío
// Constructor
// toma como argumento montoInicial y lo asigna a monto
// Métodos
// agregarGasto(gasto) agrega gasto a operaciones
// agregarGanancia(ganancia) agrega ganancia a operaciones
// obtenerGastosPorMes(mes) devuelve un array con todos los gastos hechos en mes
// obtenerGanaciasPorMes(mes) devuelve un array con todas los ganancias obtenidas en mes
// obtenerGastosPorCategoria(categoria) devuelve un array con todos los gastos de cierta categoria
// obtenerGanaciasPorCategoria(categoria) devuelve un array con todas las ganancias de cierta categoria
// calcularTotalPorMes(mes) devuelve el total resultante de restar todos los gastos hechos y sumar todas las ganancias obtenidas en un cierto mes
// calcularTotalPorCategoria(categoria) devuelve el total resultante de restar todos los gastos hechos y sumar todas las ganancias obtenidas en cierta`categoria
// **obtenerMonto()** devuelve monto
// Observaciones
// los objetos gasto y ganancia contiene las propiedades:
// descripcion (string)
// cantidad (número)
// fecha (Date)
// categoria (string)
// cuando se agrega gasto o ganancia al array operaciones, hay que agregarle a dicha objeto la propiedad tipo con el valor "GASTO" o "GANANCIA" según corresponda, para poder identificarlos en las siguientes operaciones
// cuando se devuelve un array con gastos o ganancias, hay que borrar de los objetos que se devuelven la propiedad tipo

class BilleteraVirtual {
  #monto
  #operaciones = []

  constructor(montoInicial) {
    this.#monto = montoInicial
  }

  // Métodos
  agregarGasto = (gasto) => {
    this.#monto -= gasto.cantidad
    this.#operaciones.push({ tipo: "gasto", ...gasto })
  }
  agregarGanancia = (ganancia) => {
    this.#monto += ganancia.cantidad
    this.#operaciones.push({ tipo: "ganancia", ...ganancia })
  }
  obtenerGastosPorMes = (mes) => {
    const aListaDeGastos = (arrayParcial, operacion, mes) => {
      if ((operacion.fecha.getMonth() + 1) === mes) {
        if (operacion.tipo === "gasto") {
          const { descripcion, cantidad, fecha, categoria } = operacion;
          arrayParcial = [...arrayParcial, { descripcion, cantidad, fecha, categoria }];
        }
      }
      return arrayParcial
    }
    return (this.#operaciones).reduce((arrayParcial, operacion) => aListaDeGastos(arrayParcial, operacion, mes), [])
  }
  obtenerGananciasPorMes = (mes) => {
    const aListaDeGanancias = (arrayParcial, operacion, mes) => {
      if ((operacion.fecha.getMonth() + 1) === mes) {
        if (operacion.tipo === "ganancia") {
          const { descripcion, cantidad, fecha, categoria } = operacion;
          arrayParcial = [...arrayParcial, { descripcion, cantidad, fecha, categoria }];
        }
      }
      return arrayParcial
    }
    return (this.#operaciones).reduce((arrayParcial, operacion) => aListaDeGanancias(arrayParcial, operacion, mes), [])
  }

  obtenerGastosPorCategoria = (categoria) => {
    const aGastosPorCategorias = (arrayParcial, operacion) => {
      if (operacion.categoria === categoria && operacion.tipo === "gasto") {
        const { descripcion, cantidad, fecha, categoria } = operacion;
        arrayParcial = [...arrayParcial, { descripcion, cantidad, fecha, categoria }];
      }
      return arrayParcial
    }
    return (this.#operaciones).reduce((arrayParcial, operacion) => aGastosPorCategorias(arrayParcial, operacion, categoria), [])
  }

  obtenerGanaciasPorCategoria = (categoria) => {
    const aGananciasPorCategorias = (arrayParcial, operacion) => {
      if (operacion.categoria === categoria && operacion.tipo === "ganancia") {
        const { descripcion, cantidad, fecha, categoria } = operacion;
        arrayParcial = [...arrayParcial, { descripcion, cantidad, fecha, categoria }];
      }
      return arrayParcial
    }
    return (this.#operaciones).reduce((arrayParcial, operacion) => aGananciasPorCategorias(arrayParcial, operacion, categoria), [])
  }
  calcularTotalPorMes = (mes) => {
    const aTotalPorMes = (sumaParcial, operacion, mes) => {
      if ((operacion.fecha.getMonth() + 1) === mes) {
        sumaParcial = operacion.tipo === "ganancia" ? sumaParcial + operacion.cantidad : sumaParcial - operacion.cantidad
      }
      return sumaParcial
    }
    return (this.#operaciones).reduce((sumaParcial, operacion) => aTotalPorMes(sumaParcial, operacion, mes), 0)
  }
  calcularTotalPorCategoria = (categoria) => {
    const aTotalPorCategoria = (sumaParcial, operacion, mes) => {
      if (operacion.categoria === categoria) {
        sumaParcial = operacion.tipo === "ganancia" ? sumaParcial + operacion.cantidad : sumaParcial - operacion.cantidad
      }
      return sumaParcial
    }
    return (this.#operaciones).reduce((sumaParcial, operacion) => aTotalPorCategoria(sumaParcial, operacion, categoria), 0)
  }

  //getter
  obtenerMonto = () => { return this.#monto }

}

const billetera = new BilleteraVirtual(3000)


