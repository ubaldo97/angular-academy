import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  titulo:string = '';
  @Output() tareaCreada = new EventEmitter<string>();

  crearTarea() {
    this.tareaCreada.emit(this.titulo);
    this.titulo = '';
  }
}
