import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  nombre : string = "Ubaldo Panuco";
  onSubmit() {
    console.log(this.nombre);
  }
  actualizarNombre() {
   this.nombre = this.nombre + " Sandoval";
  }
  
}
