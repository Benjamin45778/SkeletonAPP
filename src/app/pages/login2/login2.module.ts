import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Login2PageRoutingModule } from './login2-routing.module';
import { Login2Page } from './login2.page'; // standalone

@NgModule({
  // OJO: en standalone NO se declara, se importa.
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Login2PageRoutingModule,
    Login2Page, // importar el componente standalone
  ],
})
export class Login2PageModule {}
