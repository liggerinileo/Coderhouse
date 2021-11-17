import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploUnoComponent } from './ejemplo-uno.component';

describe('EjemploUnoComponent', () => {
  let component: EjemploUnoComponent;
  let fixture: ComponentFixture<EjemploUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
