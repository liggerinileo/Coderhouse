import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  floatLabelControl = new FormControl('auto');
  hide = true;
  user: string | undefined;
  pass: string | undefined;

  loginForm = this.fb.group({
    nombreUsuario: [
      '', 
      [Validators.required]
    ],
    contraseña: [
      '', 
      [Validators.required]
    ]
    
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.user = "ligge10";
    this.pass = "Leo35418660"
  }

  onSubmit() {
    /*if (this.loginForm.value.nombreUsuario == this.user && this.loginForm.value.contraseña == this.pass) {
      this.router.navigate(['/home']);
    }*/
    this.router.navigate(['/home']);
  }

}
