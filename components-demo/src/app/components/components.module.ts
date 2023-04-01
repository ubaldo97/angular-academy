import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { ViewComponent } from './view/view.component';
import { CompletedComponent } from './completed/completed.component';



@NgModule({
  declarations: [
    PadreComponent,
    HijoComponent,
    HeaderComponent,
    InputComponent,
    ViewComponent,
    CompletedComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PadreComponent,
    HijoComponent,
    HeaderComponent,
    InputComponent,
    ViewComponent,
    CompletedComponent
  ]
})
export class ComponentsModule { }
