import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tareas',
  imports: [],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css',
})
export class TareasComponent {
  @Input() tarea: string = '';
  @Output() eliminar = new EventEmitter<void>();

  eliminarTarea() {
    this.eliminar.emit();
  }
}
