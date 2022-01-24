import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ConfirmedValidator } from "./confirmed.validator";
import { UsersService } from "../../service/users/users.service";
import { User } from 'src/app/models/User';

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
    ],
    isAdmin: [
      ''
    ]
  },
  {
    validator: ConfirmedValidator('password', 'confirm_password')
  }
  );

  save() {
    let isAdmin = this.signupForm?.value?.isAdmin ? true : false;
    let user: User = {
      userName: this.signupForm?.value?.userName,
      email: this.signupForm?.value?.email,
      password: this.signupForm?.value?.password,
      isAdmin: isAdmin
    }
    this.userService.createUser(user).subscribe(res => {
      console.log(res);
      this.router.navigate(['/login']);

    }, error => {
      console.log(error?.error?.message);
      alert(error?.error?.message);

    });
  }

  get f(){
    return this.signupForm.controls;
  }

}