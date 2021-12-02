import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  regExpPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])");
  showForm = true;
  email = "";
  nombreUsuario = "";
  pass = "";
  pass2 = "";

  signupForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    nombreUsuario: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    pass: ['', Validators.compose([Validators.required, Validators.minLength(5), 
      Validators.maxLength(10), Validators.pattern(this.regExpPassword)])],
    pass2: ['', Validators.compose([Validators.required, Validators.minLength(5), 
      Validators.maxLength(10), Validators.pattern(this.regExpPassword)])],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.showForm = false;
  }

  backToForm() {
    this.showForm = true;
  }

}
