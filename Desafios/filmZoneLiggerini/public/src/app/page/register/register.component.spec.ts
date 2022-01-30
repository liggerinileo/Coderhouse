import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        RouterModule,
        MatIconModule
      ],
      providers: [ FormBuilder, HttpHandler, HttpClient ],
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('[Email-Check] - should check users email address is invalid', () => {
    let email = component?.signupForm?.controls['email'];
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    expect(email?.errors?.required).toBeTruthy();
    email.setValue('abc');

    expect(email?.errors?.['email']).toBeTruthy();
  });

  it('[Email-Check] - should check users correct email address is entered', () => {
    let email = component?.signupForm?.controls['email'];
    email.setValue('abc@gmail');
    expect(email?.errors).toBeNull();
  });

  it('[Password-Check] - should check password validity', () => {
    let pwd = component?.signupForm?.controls['password'];
    pwd.setValue('123456');
    expect(pwd?.errors).toBeNull();
    expect(pwd.valid).toBeTruthy();
  });

  it('[Password-Check] - should check password errors', () => {
    let pwd = component?.signupForm?.controls['password'];
    expect(pwd?.errors?.required).toBeTruthy();
    pwd.setValue('45785555');
    expect(pwd.hasError('minlength')).toBeFalsy();
    expect(pwd.hasError('maxlength')).toBeFalsy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
