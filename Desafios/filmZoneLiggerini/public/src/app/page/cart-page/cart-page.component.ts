import { Component, Inject, OnInit } from '@angular/core';
import { CartService } from "../../service/cart/cart.service";
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users/users.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { MoviesService } from 'src/app/service/movies/movies.service';
import { addedtocart } from "../../store/actions/cart.actions";
import { MovieState } from "../../store/states/movie.state";
import { MovieStore } from "../../store/stores/movie.store";
import { Store } from 'redux';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cartList: any[] = [];
  admin: boolean = false;
  sumaTotal: number = 0;
  id: number = -1;
  stateAddedToCart: any;
  user: any;
  movie: any;

  constructor(private router: Router, private cartService: CartService, 
    private userService: UsersService, private moviesService: MoviesService, private modal: NgbModal,
    @Inject(MovieStore) private store: Store<MovieState>) {
      this.readState();
      store.subscribe(() => {
        this.readState();
      })
  }

  ngOnInit(): void {
    this.load();
  }

  readState() {
    const state: MovieState = this.store.getState();
    this.stateAddedToCart = state.addedToCart;
    console.log(this.stateAddedToCart);
  }

  load(): void {
    this.user = this.userService.getUser();
    if (this.user?.isAdmin) {
      this.admin = true;
    }
    let today = new Date().toDateString();
    this.cartService.getAll().subscribe(movies => {
      movies.forEach((m: any) => {
        if (m.returnDate == today) {
          m.returnDate = " ";
          m.rented = false;
          this.editMovie(m, m?._id);
        }
      });
      if (this.admin) {
        this.cartList = movies;
        this.cartList.forEach((movie: any) => {
          this.sumaTotal += movie?.price;
        });

      } else {
        movies.forEach((movie: any) => {
          if (movie?.client == this.user?.userName) {
            this.cartList.push(movie);
            this.sumaTotal += movie?.price;
          }
        });
      }
    }, error => {
      console.log(error);

    });
  }

  rent() {
    let today = new Date();
    let dateToReturn = new Date(new Date().setDate(today.getDate() + 15));
    let m: Movie = {
      id: this.movie?.id,
      name: this.movie.name,
      year: this.movie.year,
      image: this.movie.image,
      duration: this.movie.duration,
      description: this.movie.description,
      price: this.movie.price,
      genre: this.movie.genre,
      filmZoneCategory: this.movie.filmZoneCategory,
      addedToCart: this.movie.addedToCart,
      rented: true,
      returnDate: dateToReturn.toDateString()
    }
    this.editMovie(m, this.movie?._id);
  }

  editMovie(movie: Movie, movieId: string) {
    this.cartService.editMovie(movie, movieId).subscribe(res => {
      console.log(res);
      this.load();
      this.dismiss();

    }, error => {
      console.log(error);
      if(error == "Token invalido" || error == "No hay token") {
        alert("Ha expirado el tiempo de sesión");

      } else {
        alert(error?.error?.message);

      }
    });
  }

  delete() {
    this.cartService.deleteMovie(this.id).subscribe(res => {
      this.sumaTotal -= this.sumaTotal;
      this.dismiss();
      this.store.dispatch<any>(addedtocart(false));
      this.load();

    }, error => {
      console.log(error);

    });
  }

  openModal(content: any, id: any) {
    this.id = id;
    let options: NgbModalOptions = {
      centered: true,
      backdrop: 'static',
      keyboard: false,
    };
    this.modal.open(content, options);
  }

  openModalRent(content: any, movie: Movie) {
    this.movie = movie;
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

}
