import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, createAnimation } from '@ionic/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements AfterViewInit {
  name = '';
  email = '';
  password = '';

  @ViewChild('card', { read: ElementRef }) cardEl!: ElementRef;

  ngAfterViewInit() {
    // Simple entrance animation
    const anim = createAnimation()
      .addElement(this.cardEl.nativeElement)
      .duration(500)
      .fromTo('opacity', '0', '1')
      .fromTo('transform', 'translateY(12px)', 'translateY(0)');
    anim.play();
  }

  submit() {
    console.log({name: this.name, email: this.email, password: this.password});
    // Aquí podrías llamar a tu API de registro si corresponde
  }
}
