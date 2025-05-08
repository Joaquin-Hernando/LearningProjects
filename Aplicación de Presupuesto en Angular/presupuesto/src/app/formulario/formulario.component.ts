import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EgresoService } from '../egreso/egreso.service';
import { IngresoService } from '../ingreso/ingreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  tipo: string = 'ingresoOperacion';

  descripcionInput: string | null = null;
  valorInput: number | null = null;

  constructor(
    private ingresoServicio: IngresoService,
    private egresoServicio: EgresoService
  ) {}

  tipoOperacion(evento: Event) {
    const elementoSelect = evento.target as HTMLSelectElement;
    this.tipo = elementoSelect.value;
  }

  agregarValor() {
    if (this.valorInput !== null && this.descripcionInput !== null) {
      if (this.tipo == 'ingresoOperacion') {
        this.ingresoServicio.ingresos.push(
        new Ingreso(this.descripcionInput, this.valorInput));
      }
      else{
        this.egresoServicio.egresos.push(
          new Egreso(this.descripcionInput, this.valorInput));
      }
    }
    else {
      console.log('Introduce valores en descripción y valor válidos')
  }
  this.descripcionInput = null;
  this.valorInput = null;
  }
}
