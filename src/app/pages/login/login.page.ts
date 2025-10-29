import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(8),
          Validators.pattern(/^[a-zA-Z0-9]+$/), // alfanumérico
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{4}$/), // 4 dígitos
        ],
      ],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const extras: NavigationExtras = {
      state: {
        username: this.form.value.username,
      },
    };

    // Al apretar "Ingresar", cerrar Login y pasar a Home
    this.router.navigate(['/home'], extras);
  }
}
