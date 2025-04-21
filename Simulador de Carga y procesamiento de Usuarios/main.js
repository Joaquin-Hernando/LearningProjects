// Clase base
class Usuario {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    mostrarInfo() {
      return `${this.nombre} tiene ${this.edad} años.`;
    }
  }
  
  // Clases que heredan de Usuario
  class Admin extends Usuario {
    mostrarInfo() {
      return `Admin: ${super.mostrarInfo()}`;
    }
  }
  
  class Cliente extends Usuario {
    mostrarInfo() {
      return `Cliente: ${super.mostrarInfo()}`;
    }
  }
  
  // Simulación de carga de usuarios con callback
  const cargarUsuarios = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const usuarios = [
          new Admin("Lucas", 32),
          new Cliente("María", 25),
          //new Cliente("Julián", -4) // Usuario con edad inválida (genera error)
        ];
  
        const usuarioInvalido = usuarios.find(u => u.edad < 0);
        if (usuarioInvalido) {
          reject(`Edad inválida detectada en el usuario: ${usuarioInvalido.nombre}`);
        } else {
          resolve(usuarios);
        }
      }, 1500);
    });
  };
  
  // Procesamiento de usuarios
  const procesarUsuarios = async () => {
    console.log("Iniciando carga de usuarios");
  
    try {
      const usuarios = await cargarUsuarios();
  
      console.log("Usuarios cargados exitosamente. Procesando");
  
      let i = 0;
      const intervalo = setInterval(() => {
        if (i < usuarios.length) {
          const usuario = usuarios[i];
          console.log(usuario.mostrarInfo());
  
          if (usuario instanceof Admin) {
            console.log("Tiene acceso total al sistema");
          } else if (usuario instanceof Cliente) {
            console.log("Acceso limitado a funciones de cliente");
          }
  
          console.log("------");
          i++;
        } else {
          clearInterval(intervalo);
          console.log("Procesamiento finalizado");
        }
      }, 1000);
  
    } catch (error) {
      console.error("Error durante la carga de usuarios:");
      console.error(error);
    } finally {
      console.log("Finalizando intento de procesamiento.");
    }
  };
  
  // Ejecutar simulación
  procesarUsuarios();
  