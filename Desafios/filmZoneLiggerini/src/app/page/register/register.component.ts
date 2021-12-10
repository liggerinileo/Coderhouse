import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  user: string | undefined;
  pass: string | undefined;
  strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

  signupForm = this.fb.group({
    nombreCompleto: [
      '', 
      [Validators.required]
    ],
    nombreUsuario: [
      '', 
      [Validators.required]
    ],
    password: [
      '', 
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        Validators.pattern(this.strongRegex)
      ]
    ],
    confirmarPassword: [
      '', 
      [Validators.required]
    ],
    email: [
      '', 
      [
        Validators.required,
        Validators.email
      ]
    ]
    
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.user = "ligge10";
    this.pass = "Leo35418660"
  }

  onSubmit() {
    this.router.navigate(['/login']);
  }

  onConfirmPassword() {
    if (this.confirm_password.value == this.password.value) {
      this.confirm_password.setErrors(null);
    } else {
      this.confirm_password.setErrors({ mismatch: true });
    }
  }

  checkPassword() {
    if (!this.password.valid) {
      this.password.setErrors({ mismatch: true });

    }
  }

  get password(): AbstractControl {
    return this.signupForm.controls['password'];
  }

  get confirm_password(): AbstractControl {
    return this.signupForm.controls['confirmarPassword'];
  }

  get email_valido(): AbstractControl {
    return this.signupForm.controls['email'];
  }

}