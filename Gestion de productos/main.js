// Clase base Producto
class Producto {
    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
    }

    // Métodos get y set
    get nombre() {
        return this._nombre.toUpperCase(); // uso de función incorporada
    }

    set nombre(nuevoNombre) {
        if (nuevoNombre.length > 0) {
            this._nombre = nuevoNombre;
        }
    }

    get precio() {
        return this._precio;
    }

    set precio(nuevoPrecio) {
        if (nuevoPrecio >= 0) {
            this._precio = nuevoPrecio;
        }
    }

    // Método común
    mostrarInfo() {
        return `Producto: ${this.nombre} - Precio: $${this.precio}`;
    }

    // Polimorfismo con toString()
    toString() {
        return this.mostrarInfo();
    }
}

// Herencia
class ProductoFisico extends Producto {
    constructor(nombre, precio, peso) {
        super(nombre, precio);
        this.peso = peso;
    }

    calcularEnvio() {
        return `$${Math.round(this.peso * 2.5)}`; // uso de redondeo
    }

    // Sobreescritura de método
    mostrarInfo() {
        return `${super.mostrarInfo()} - Peso: ${this.peso}kg - Envío: ${this.calcularEnvio()}`;
    }
}

class ProductoDigital extends Producto {
    constructor(nombre, precio, formato) {
        super(nombre, precio);
        this.formato = formato;
    }

    mostrarInfo() {
        return `${super.mostrarInfo()} - Formato: ${this.formato}`;
    }
}

// Crear objetos
const libro = new ProductoFisico("Libro de JavaScript", 3500, 1.2);
const curso = new ProductoDigital("Curso Online", 7500, "MP4");

// Uso de call y apply
function aplicarDescuento(porc) {
    this.precio -= this.precio * (porc / 100);
}

aplicarDescuento.call(libro, 10);  // descuento del 10%
aplicarDescuento.apply(curso, [20]); // descuento del 20%

// Prototype
Producto.prototype.convertirADolares = function () {
    const tasa = 1000;
    return `$${(this.precio / tasa).toFixed(2)} USD`;
};

// Mostrar info
console.log(libro.mostrarInfo());
console.log(libro.convertirADolares());

console.log(curso.mostrarInfo());
console.log(curso.convertirADolares());
