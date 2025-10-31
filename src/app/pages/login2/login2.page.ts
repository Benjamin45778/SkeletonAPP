import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class Login2Page {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

login() {
  if (this.username.trim() && this.password.trim()) {
    // Guarda para sobrevivir a refresh/F5
    localStorage.setItem('username', this.username);

    // Pasa el nombre por el estado de la navegación
    this.router.navigate(['/home2'], { state: { username: this.username } });
  } else {
    alert('Por favor, ingresa tus credenciales');
  }
}}