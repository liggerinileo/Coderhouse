import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ConfirmedValidator } from "./confirmed.validator";
import { UsersService } from "../../service/users/users.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  hide2 = true;

  constructor(private fb: FormBuilder, private router: Router, private userService: UsersService) { }

  ngOnInit(): void { }

  signupForm = this.fb.group({
    fullname: [
      '', 
      [Validators.required]
    ],
    userName: [
      '', 
      [Validators.required]
    ],
    password: [
      '', 
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15)
      ]
    ],
    confirm_password: [
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
  },
  {
    validator: ConfirmedValidator('password', 'confirm_password')
  }
  );

  save() {
    let usuarioRepetido = false;
    let user = {
      fullname: this.signupForm?.value?.fullname,
      userName: this.signupForm?.value?.userName,
      email: this.signupForm?.value?.email,
      password: this.signupForm?.value?.password,
      admin: false
    }
    this.userService.getAll('').subscribe(users => {
      users.forEach((e: any) => {
        if (e.userName == user.userName) {
          usuarioRepetido = true;

        }
      });
      if (!usuarioRepetido) {
        this.userService.createUser(user).subscribe(res => {
          console.log(res);
          this.router.navigate(['/login']);

        }, error => {
          console.log(error);

        });
      } else {
        alert('El nombre de usuario ' + user.userName + ' ya existe, elija otro por favor.');

      }
    }, error => {
      console.log(error);

    });
  }

  get f(){
    return this.signupForm.controls;
  }

}