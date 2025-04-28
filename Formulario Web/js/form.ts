// Interface para Usuario
interface Usuario {
    nombre: string;
    email: string;
    edad: number;
  }
  
  // Clase para manejar el formulario
  class FormularioUsuario {
    private formulario: HTMLFormElement;
    private mensaje: HTMLElement;
  
    constructor() {
      this.formulario = document.getElementById('formulario') as HTMLFormElement;
      this.mensaje = document.getElementById('mensaje') as HTMLElement;
      this.init();
    }
  
    private init = (): void => {
      this.formulario.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        this.validarFormulario();
      });
    }
  
    private validarFormulario = (): void => {
      const nombreInput = (document.getElementById('nombre') as HTMLInputElement).value.trim();
      const emailInput = (document.getElementById('email') as HTMLInputElement).value.trim();
      const edadInput = +(document.getElementById('edad') as HTMLInputElement).value;
  
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
  
        const usuario: Usuario = {
          nombre: nombreInput,
          email: emailInput,
          edad: edadInput
        };
  
        this.mostrarMensaje(`✅ Usuario registrado: ${usuario.nombre}, ${usuario.email}, ${usuario.edad} años.`, true);
  
      } catch (error) {
        this.mostrarMensaje(`❌ ${error}`, false);
      }
    }
  
    private mostrarMensaje = (mensaje: string, exito: boolean): void => {
      this.mensaje.innerText = mensaje;
      this.mensaje.style.color = exito ? "green" : "red";
    }
  }
  
  // Instanciar la clase
  new FormularioUsuario();
  