import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CardMovieBigComponent } from './card-movie-big.component';

describe('CardMovieBigComponent', () => {
  let component: CardMovieBigComponent;
  let fixture: ComponentFixture<CardMovieBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule.withRoutes([]),
        RouterModule
      ],
      providers: [
        HttpClient,
        HttpHandler
      ],
      declarations: [ CardMovieBigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMovieBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
