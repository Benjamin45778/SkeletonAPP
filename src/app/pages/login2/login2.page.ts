import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss']
})
export class Login2Page {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  submit(): void {
    console.log('Formulario enviado:', this.email, this.password);

    if (!this.email || !this.password) {
      alert('Por favor ingresa tu email y contraseña.');
      return;
    }

    alert('¡Felicidades! Inicio de sesión exitoso.');

    this.router.navigate(['/home2'], { replaceUrl: true });
  }
}
