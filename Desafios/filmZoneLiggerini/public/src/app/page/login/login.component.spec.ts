import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from 'src/app/service/users/users.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { LoginComponent } from './login.component';
import { User } from 'src/app/models/User';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: UsersService;
  let nombreUsuario: string;
  let password: string;

  const usersDB: User[] = [
    {
      _id: "61eec25122e6bcd2e9a28055",
      userName: "ligge10",
      email: "liggerinileo@gmail.com",
      password: "1234",
      isAdmin: true
    },
    {
      _id: "61eefb7fc2ef0b0b782b4ef4",
      userName: "juan12",
      email: "juan@ggmail.com",
      password: "Juan12345",
      isAdmin: false
    }
  ]
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule.withRoutes([]),
        RouterModule,
        HttpClientTestingModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        FormBuilder,
        HttpClient,
        HttpHandler,
        UsersService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('[Email-Check] - should check user name does not exists', () => {
    let userName = component?.loginForm?.controls['userName'];
    userName.setValue('ligge10');
    usersDB.forEach((u: any) => {
      if (u?.userName == userName.value) {
        nombreUsuario = u?.userName;
      }
    });

    expect(userName.value).toEqual(nombreUsuario);
  });

  it('[Login-Check] - should check password is correct', () => {
    let user = component?.loginForm?.controls['userName'];
    let pwd = component?.loginForm?.controls['password'];
    user.setValue('ligge10');
    pwd.setValue('1234');
    usersDB.forEach((u: any) => {
      if (u?.userName == user.value) {
        password = u?.password;
      }
    });
    expect(pwd.value).toEqual(password);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
