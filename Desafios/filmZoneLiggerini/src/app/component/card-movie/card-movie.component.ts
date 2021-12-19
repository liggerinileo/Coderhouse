import { Component, Input } from '@angular/core';
import { CartService } from "../../service/cart.service";
import { Card } from "./card";

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent {

  @Input() url: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() duration: string = '';

  movie: Card = {
    url: '',
    title: '',
    description: '',
    duration: ''
  };
  

  constructor(private cartService: CartService) {}


  addToCart(movie: Card): void { 
    movie = {
      url: this.url,
      title: this.title,
      description: this.description,
      duration: this.duration
    }
    this.cartService.addToCart(movie);
  }

}