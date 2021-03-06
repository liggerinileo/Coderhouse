import { Component, Inject, OnInit } from '@angular/core';
import { CartService } from "../../service/cart/cart.service";
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users/users.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { MoviesService } from 'src/app/service/movies/movies.service';
import * as mvie from "../../store/actions/movie.actions";
import { State } from "../../store/states/movie.state";
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
  state: any;
  user: any;
  movie: any;
  today: any;

  constructor(private router: Router, private cartService: CartService, 
    private userService: UsersService, private moviesService: MoviesService, private modal: NgbModal,
    @Inject(MovieStore) private store: Store<State>) {
      this.readState();
      store.subscribe(() => {
        this.readState();
      })
      this.today = new Date().getDate();
  }

  ngOnInit(): void {
    this.load(false);
  }

  readState() {
    const state: State = this.store.getState();
    this.state = state;
    console.log("STATE");
    console.log(this.state);
    console.log("-------------------------");
  }

  load(alquilar: boolean): void {
    this.user = this.userService.getUser();
    if (this.user?.isAdmin) {
      this.admin = true;
    }
    let today = new Date().toDateString();
    this.cartService.getAll().subscribe(movies => {
      movies.forEach((m: any) => {
        if (m.rented) {
          if (m.returnDate == today) {
            m.returnDate = " ";
            m.rented = false;
            this.editMovie(m, m?._id, null);
          }
        }
      });
      if (this.admin) {
        this.cartList = movies;
        if (!alquilar) {
          this.cartList.forEach((movie: any) => {
            this.sumaTotal += movie?.price;
          });
        }
      } else {
        movies.forEach((movie: any) => {
          if (movie?.client == this.user?.userName) {
            this.cartList.push(movie);
            if (!alquilar) {
              this.sumaTotal += movie?.price;
            }
          }
        });
      }
    }, error => {
      console.log(error);

    });
  }

  returnMovie() {
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
      rented: false,
      returnDate: " "
    }
    this.editMovie(m, this.movie?._id, false);
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
    this.editMovie(m, this.movie?._id, true);
  }

  editMovie(movie: Movie, movieId: string, rented: Boolean | null) {
    this.cartService.editMovie(movie, movieId).subscribe(res => {
      console.log(res);
      this.load(true);
      this.dismiss();

      if (rented) {
        let state = {
          movie: movie,
          state: "Movie rented"
        }
        this.store.dispatch<any>(mvie.rented(state));

      } else if (!rented) {
        let state = {
          movie: movie,
          state: "Movie returned"
        }
        this.store.dispatch<any>(mvie.returned(state));

      }
    }, error => {
      console.log(error);
      if(error == "Token invalido" || error == "No hay token") {
        alert("Ha expirado el tiempo de sesi??n");

      } else {
        alert(error?.error?.message);

      }
    });
  }

  delete() {
    this.cartService.deleteMovie(this.movie._id).subscribe(res => {
      this.sumaTotal -= this.sumaTotal;
      this.dismiss();
      this.movie.addedToCart = false;
      this.load(false);
      let state = {
        movie: this.movie,
        state: "Removed from cart"
      }
      this.store.dispatch<any>(mvie.removedfromcart(state));

    }, error => {
      console.log(error);

    });
  }

  openModal(content: any, movie: any) {
    this.movie = movie;
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
