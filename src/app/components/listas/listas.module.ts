import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [ 
    ListasComponent,
  ],
  exports: [
    ListasComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    PipesModule
  ]
})
export class ListasModule { }