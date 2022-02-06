import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MoviesService } from 'src/app/service/movies/movies.service';
import { CartService } from "../../service/cart/cart.service";
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from 'src/app/service/users/users.service';
import { Cart } from 'src/app/models/Cart';
import { Movie } from 'src/app/models/Movie';
import { addedtocart } from "../../store/actions/cart.actions";
import { MovieState } from "../../store/states/movie.state";
import { MovieStore } from "../../store/stores/movie.store";
import { Store } from 'redux';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent {

  @Input() movie: Movie | undefined;
  @Output() load = new EventEmitter<boolean>();
  addedToC: boolean = false;
  movieToDelete: any;
  admin: boolean = false;
  user: any;
  stateAddedToCart: any;

  constructor(private cartService: CartService, private moviesService: MoviesService, 
            private router: Router, private modal: NgbModal, private userService: UsersService,
            @Inject(MovieStore) private store: Store<MovieState>) {
      this.user = this.userService.getUser();
      if (this.user?.isAdmin) {
        this.admin = true;
      }
      this.readState();
      store.subscribe(() => {
        this.readState();
      })
  }

  readState() {
    const state: MovieState = this.store.getState();
    this.stateAddedToCart = state.addedToCart;
    console.log(this.stateAddedToCart);
  }

  addToCart(): void {    
    this.addedToC = true;
    this.movie ? this.movie.addedToCart = this.addedToC : undefined;
    let movieCart: Cart = {
      name: this.movie?.name ,
      image: this.movie?.image,
      description: this.movie?.description,
      duration: this.movie?.duration,
      year: this.movie?.year,
      price: this.movie?.price,
      genre: this.movie?.genre,
      filmZoneCategory: this.movie?.filmZoneCategory,
      addedToCart: this.movie?.addedToCart,
      id: this.movie?.id,
      returnDate: " ",
      rented: false,
      client: this.user.userName
    };
    
    this.cartService.addMovie(movieCart).subscribe(res => {
      console.log(res);
      this.store.dispatch<any>(addedtocart(true));
      this.moviesService.editMovie(this.movie, this.movie?._id).subscribe(res => {
        console.log(res);
  
      }, error => {
        console.log(error);
  
      });

    }, error => {
      console.log(error);
      this.addedToC = false;
    });
  }

  edit() {
    this.moviesService.setMovie(this.movie);
    this.router.navigate(['/create']);
  }

  openModal(content: any) {
    this.moviesService.setMovie(this.movie);

    let options: NgbModalOptions = {
      centered: true,
      backdrop: 'static',
      keyboard: false,
    };
    this.modal.open(content, options);
  }

  dismiss() {
    this.modal.dismissAll();
  }

  delete() {
    this.moviesService.delete(this.movie?._id).subscribe(res => {
      this.modal.dismissAll(true);
      this.load.emit(true);

    }, error => {
      this.modal.dismissAll(false);
      alert(error?.error?.message);

    });
  }

}
