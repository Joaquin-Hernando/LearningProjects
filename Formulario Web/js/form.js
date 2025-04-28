"use strict";
// Clase para manejar el formulario
class FormularioUsuario {
    constructor() {
        this.init = () => {
            this.formulario.addEventListener('submit', (e) => {
                e.preventDefault();
                this.validarFormulario();
            });
        };
        this.validarFormulario = () => {
            const nombreInput = document.getElementById('nombre').value.trim();
            const emailInput = document.getElementById('email').value.trim();
            const edadInput = +document.getElementById('edad').value;
            try {
                if (!nombreInput || !emailInput || !edadInput) {
                    throw new Error('Todos los campos son obligatorios.');
                }
                if (!emailInput.includes('@') || !emailInput.includes('.')) {
                    throw new Error('El email no es válido.');
                }
                if (edadInput <= 0) {
                    throw new Error('La edad debe ser mayor que cero.');
                }
                const usuario = {
                    nombre: nombreInput,
                    email: emailInput,
                    edad: edadInput
                };
                this.mostrarMensaje(`Usuario registrado: ${usuario.nombre}, ${usuario.email}, ${usuario.edad} años.`, true);
            }
            catch (error) {
                this.mostrarMensaje(`❌ ${error}`, false);
            }
        };
        this.mostrarMensaje = (mensaje, exito) => {
            this.mensaje.innerText = mensaje;
            this.mensaje.style.color = exito ? "green" : "red";
        };
        this.formulario = document.getElementById('formulario');
        this.mensaje = document.getElementById('mensaje');
        this.init();
    }
}
// Instanciar la clase
new FormularioUsuario();
