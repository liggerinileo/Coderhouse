import { Component, Input } from '@angular/core';
import { CartService } from "../../service/cart/cart.service";
import { Card } from "../card-movie/card";

@Component({
  selector: 'app-card-movie-big',
  templateUrl: './card-movie-big.component.html',
  styleUrls: ['./card-movie-big.component.scss']
})
export class CardMovieBigComponent {

  addCart: boolean = true;

  @Input() id: any;
  @Input() image: string = '';
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() duration: string = '';
  @Input() year: number = 0;
  @Input() price: number = 0;
  @Input() genre: string[] = [];
  @Input() filmZoneCategory: string[] = [];
  @Input() addedToCart: boolean = false;

  

  constructor(private cartService: CartService) {}


  addToCart(): void { 
    if (this.addCart) {
      this.addCart = false;
    }

    let movie: Card = {
      id: this.id,
      image: this.image,
      name: this.name,
      description: this.description,
      duration: this.duration,
      year: this.year,
      price: this.price,
      genre: this.genre,
      filmZoneCategory: this.filmZoneCategory,
      addedToCart: true
    }

    this.cartService.addToCart(movie);
  }


}
