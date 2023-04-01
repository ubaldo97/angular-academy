import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  @Input() tareas:string[] = [];
  @Output() tareaEliminada = new EventEmitter();
  @Output() tareaCompletada = new EventEmitter();

  eliminarTarea(tarea:string) {
    this.tareaEliminada.emit(tarea);
  }
  completarTarea(tarea:string) {
    this.tareaCompletada.emit(tarea);
  }
}
