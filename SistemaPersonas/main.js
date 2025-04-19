//Clase Persona
class Persona {

    static contadorPersonas = 0;

    constructor(_nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get getIdPersona() {
        return this._idPersona;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }

    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }

    toString () {
        return `
        ${this._idPersona} 
        ${this._nombre} 
        ${this._apellido} 
        ${this._edad}`;
    }
}

//Clase Cliente
class Cliente extends Persona {
    
    static contadorClientes = 0;

    constructor(nombre, apellido, edad, _fechaRegistro) {
        super(nombre, apellido, edad)
        this._fechaRegistro = fechaRegistro;
        this._idCliente = ++Cliente.contadorClientes;
    }

    get _idCliente () {
        return this._idCliente;
    }

    get _fechaRegistro () {
        return this._fechaRegistro;
    }

    set _fechaRegistro (fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }

    toString () {
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }
}

//Clase Empleado
class Empleado extends Persona {

    static contadorEmpleados;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, this.apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleados;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    
    toString (){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}


let persona1 = new Persona("Juan", "Perez", 28);
console.log(persona1.toString());

let persona2 = new Persona("Carlos", "Ramirez", 35);
console.log(persona2.toString());

let empleado1 = new Persona("Karla", "Gomez", 32, 5000);
console.log(empleado1.toString());

let empleado2 = new Persona("Laura", "Quintero", 33, 7000);
console.log(empleado2.toString());

let cliente1 = new Cliente("Miguel", "Cervantes", 30, new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente("Ana", "Rodriguez", 31, new Date());
console.log(cliente2.toString());