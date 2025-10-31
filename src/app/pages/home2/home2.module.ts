import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Home2PageRoutingModule } from './home2-routing.module';
import { Home2Page } from './home2.page'; // standalone

@NgModule({
  // OJO: en standalone NO se declara, se importa.
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Home2PageRoutingModule,
    Home2Page, // importar el componente standalone
  ],
})
export class Home2PageModule {}
