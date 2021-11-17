import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploTresComponent } from './ejemplo-tres.component';

describe('EjemploTresComponent', () => {
  let component: EjemploTresComponent;
  let fixture: ComponentFixture<EjemploTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
