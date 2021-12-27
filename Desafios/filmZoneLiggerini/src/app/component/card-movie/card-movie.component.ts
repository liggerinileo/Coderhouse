import { Component, Input } from '@angular/core';
import { MoviesService } from 'src/app/service/movies/movies.service';
import { CartService } from "../../service/cart/cart.service";
import { Card } from "./card";

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent {

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
  addedToC: boolean = false;

  constructor(private cartService: CartService, private moviesService: MoviesService) {}


  addToCart(): void { 
    this.addedToC = true;

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

    this.moviesService.editUser(movie).subscribe(res => {
      console.log(res);

    }, error => {
      console.log(error);

    });
  }

}
