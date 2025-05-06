import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TareaComponent } from './tarea/tarea.component';
import { TareasComponent } from '../tareas/tareas.component';

@NgModule({
  declarations: [AppComponent, TareaComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
@Component({
  selector: 'app-lista-tareas',
  imports: [TareasComponent],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css',
})
export class ListaTareasComponent {
  tareas: string[] = [
    'Estudiar Angular',
    'Hacer compras',
    'Limpiar el escritorio',
  ];
  nuevaTarea: string = '';

  agregarTarea() {
    if (this.nuevaTarea.trim() !== '') {
      this.tareas.push(this.nuevaTarea);
      this.nuevaTarea = '';
    }
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }
}
