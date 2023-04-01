import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() nombreEnHijo:string = "-";
  @Output() miEvento = new EventEmitter<string>();

  cambiaNombre(){
    this.nombreEnHijo = "Academia angular";
    this.miEvento.emit(this.nombreEnHijo);
  }
}
