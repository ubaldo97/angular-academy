import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskPageComponent } from './task-page/task-page.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    TaskPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports:[
    TaskPageComponent
  ]
})
export class PagesModule { }
