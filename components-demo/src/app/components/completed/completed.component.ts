import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent {
  @Input() tareas:string[] = [];
  @Output() tareaEliminada = new EventEmitter();
  @Output() tareaRestaurada = new EventEmitter();

  eliminarTareaCompletada(tarea:string) {
    this.tareaEliminada.emit(tarea);
  }
  restaurarTarea(tarea:string) {
    this.tareaRestaurada.emit(tarea);
  }
}
