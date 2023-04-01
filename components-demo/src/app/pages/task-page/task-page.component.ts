import { Component } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent {
  tareas: string[] = [];
  tareasCompletas: string[] = [];

  agregarTarea(titulo: string) {
    this.tareas.push(titulo);
  }

  eliminarTarea(tarea: string) {
    this.tareas = this.tareas.filter(t => t !== tarea);
  }
 
  completarTarea(titulo:string){
    this.tareasCompletas.push(titulo);
    this.tareas = this.tareas.filter(t => t !== titulo);
  }

  eliminarTareaCompletada(titulo: string) {
    this.tareasCompletas = this.tareasCompletas.filter(t => t !== titulo);
  }
  restaurarTarea(titulo:string){
    this.tareas.push(titulo);
    this.tareasCompletas = this.tareasCompletas.filter(t => t !== titulo);
  }
}
