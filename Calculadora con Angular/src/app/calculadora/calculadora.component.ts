import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  operandoB: number = 0;
  operandoA: number = 0;
  resultado: number = 0;
  suma(){
    this.resultado = this.operandoA + this.operandoB;
  }
  resta(){
    this.resultado = this.operandoA - this.operandoB;
  }
  multiplicacion(){
    this.resultado = this.operandoA * this.operandoB;
  }
  division(){
    this.resultado = this.operandoA / this.operandoB;
  }
}
