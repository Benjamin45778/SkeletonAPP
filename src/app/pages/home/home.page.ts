import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { createAnimation } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string | null = null;

  form: FormGroup;

  // Refs para animación de inputs
  @ViewChild('nombre', { read: ElementRef }) nombreRef!: ElementRef;
  @ViewChild('apellido', { read: ElementRef }) apellidoRef!: ElementRef;

  // Ref para animar el título del Home
  @ViewChild('homeTitle', { read: ElementRef }) homeTitleRef!: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private alertCtrl: AlertController
  ) {
    this.form = this.fb.group({
      name: [''],
      lastname: [''],
      education: [''],
      birthdate: [null], // Date
    });
  }

  ngOnInit() {
    // Preferencia: recuperar desde navigation extras; fallback a history.state
    const nav = this.router.getCurrentNavigation();
    this.username = nav?.extras?.state?.['username'] ?? history.state?.username ?? null;
  }

  ionViewDidEnter() {
    // Animación del título del Home (requerimiento)
    if (this.homeTitleRef?.nativeElement) {
      createAnimation()
        .addElement(this.homeTitleRef.nativeElement)
        .duration(800)
        .iterations(1)
        .keyframes([
          { offset: 0, transform: 'translateY(-12px)', opacity: '0' },
          { offset: 1, transform: 'translateY(0)', opacity: '1' },
        ])
        .easing('ease-out')
        .play();
    }
  }

  private animateLeftToRight(el: HTMLElement) {
    // Movimiento izquierda -> derecha 1 segundo
    createAnimation()
      .addElement(el)
      .duration(1000)
      .iterations(1)
      .fromTo('transform', 'translateX(-24px)', 'translateX(0)')
      .easing('ease-out')
      .play();
  }

  onClear() {
    this.form.reset({
      name: '',
      lastname: '',
      education: '',
      birthdate: null,
    });

    // Animaciones sobre ion-input nombre y apellido
    const nombreEl: HTMLElement | null = this.nombreRef?.nativeElement?.querySelector('input');
    const apellidoEl: HTMLElement | null = this.apellidoRef?.nativeElement?.querySelector('input');

    if (nombreEl) this.animateLeftToRight(nombreEl);
    if (apellidoEl) this.animateLeftToRight(apellidoEl);
  }

  async onShow() {
    const name = this.form.value.name || '';
    const lastname = this.form.value.lastname || '';

    const alert = await this.alertCtrl.create({
      header: 'Información',
      message: `Nombre: <b>${name}</b><br>Apellido: <b>${lastname}</b>`,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
