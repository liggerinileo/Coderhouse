import { Component, Input } from '@angular/core';
import { CartService } from "../../service/cart/cart.service";
import { Card } from "../card-movie/card";

@Component({
  selector: 'app-card-movie-big',
  templateUrl: './card-movie-big.component.html',
  styleUrls: ['./card-movie-big.component.scss']
})
export class CardMovieBigComponent {

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
