import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from "../../service/users/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  floatLabelControl = new FormControl('auto');
  hide = true;

  constructor(private fb: FormBuilder, private router: Router, private userService: UsersService) { }

  loginForm = this.fb.group({
    userName: [
      '', 
      [Validators.required]
    ],
    password: [
      '', 
      [Validators.required]
    ]
    
  });

  login() {
    let userInput = this.loginForm.value;
    this.userService.login(userInput).subscribe(res => {
      this.userService.setUser(res?.user);
      console.log(res);
      localStorage.setItem('token', res?.token!);
      this.router.navigate(['/home']);

    }, error => {
      console.log(error);
      alert(error?.error?.message);

    });
  }

}
