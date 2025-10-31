import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Home2Page implements OnInit {
  username: string = '';   // <- ¡aquí está la propiedad!

  constructor(private router: Router) {}

  ngOnInit(): void {
    // 1) intenta leer desde el estado de la navegación
    const nav = this.router.getCurrentNavigation();
    const state = (nav?.extras?.state as { username?: string }) || {};

    // 2) fallback: si no viene en el estado (p. ej. F5), usa localStorage
    this.username = state.username ?? localStorage.getItem('username') ?? 'Usuario';
  }

  logout(): void {
    localStorage.removeItem('username');
    this.router.navigate(['/login2']);
  }
}
