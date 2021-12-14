import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMovieBigComponent } from './card-movie-big.component';

describe('CardMovieBigComponent', () => {
  let component: CardMovieBigComponent;
  let fixture: ComponentFixture<CardMovieBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
