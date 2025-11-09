import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { IonicModule, createAnimation } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home2',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss']
})
export class Home2Page implements AfterViewInit {

  @ViewChild('titleEl', { read: ElementRef }) titleEl!: ElementRef;
  @ViewChild('descEl', { read: ElementRef }) descEl!: ElementRef;
  @ViewChild('btnCatalog', { read: ElementRef }) btnCatalog!: ElementRef;
  @ViewChild('btnProfile', { read: ElementRef }) btnProfile!: ElementRef;
  @ViewChild('btnRegister', { read: ElementRef }) btnRegister!: ElementRef;

  ngAfterViewInit() {
    // Título
    createAnimation()
      .addElement(this.titleEl.nativeElement)
      .duration(450)
      .easing('cubic-bezier(0.22, 1, 0.36, 1)')
      .fromTo('opacity', '0', '1')
      .fromTo('transform', 'translateY(-8px)', 'translateY(0)')
      .play();

    // Descripción
    createAnimation()
      .addElement(this.descEl.nativeElement)
      .duration(450)
      .delay(120)
      .easing('cubic-bezier(0.22, 1, 0.36, 1)')
      .fromTo('opacity', '0', '1')
      .fromTo('transform', 'translateY(-6px)', 'translateY(0)')
      .play();

    // Botones (stagger)
    const buttons = [
      this.btnCatalog.nativeElement,
      this.btnProfile.nativeElement,
      this.btnRegister.nativeElement
    ];

    buttons.forEach((el, idx) => {
      createAnimation()
        .addElement(el)
        .duration(380)
        .delay(200 + idx * 100) // 200ms, 300ms, 400ms
        .easing('cubic-bezier(0.22, 1, 0.36, 1)')
        .fromTo('opacity', '0', '1')
        .fromTo('transform', 'translateY(8px)', 'translateY(0)')
        .play();
    });
  }
}
