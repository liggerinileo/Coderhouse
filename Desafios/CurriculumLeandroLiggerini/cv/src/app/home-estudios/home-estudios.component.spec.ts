import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEstudiosComponent } from './home-estudios.component';

describe('HomeEstudiosComponent', () => {
  let component: HomeEstudiosComponent;
  let fixture: ComponentFixture<HomeEstudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEstudiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
