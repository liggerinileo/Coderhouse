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
    this.userService.getAll('').subscribe(users => {
      const userSaved = users.filter((user: any) => user.userName == this.loginForm.value.userName);
      
      if (userSaved?.length > 0) {
        if (userSaved[0]?.password == userInput?.password) {
          this.router.navigate(['/home']);

        } else {
          alert('La contraseña es incorrecta');

        }
      } else {
        alert('El nombre de usuario ' + userInput.userName + ' no existe');

      }
    }, error => {
      console.log(error);

    });
  }

}
