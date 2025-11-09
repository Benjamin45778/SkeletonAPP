import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { IonicModule, createAnimation } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss']
})
export class CatalogPage implements AfterViewInit {

  constructor(private host: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    const cards = this.host.nativeElement.querySelectorAll('.plan-card');
    cards.forEach((el, i) => {
      createAnimation()
        .addElement(el as HTMLElement)
        .duration(350)
        .delay(80 * i) // stagger
        .easing('cubic-bezier(0.22, 1, 0.36, 1)')
        .fromTo('opacity', '0', '1')
        .fromTo('transform', 'translateY(10px)', 'translateY(0)')
        .play();
    });
  }
}
