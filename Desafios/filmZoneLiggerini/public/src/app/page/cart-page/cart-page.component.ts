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
    const user = this.userService.getUser();
    if (user?.isAdmin) {
      this.admin = true;
    }
    this.cartService.getAll().subscribe(movies => {
      if (this.admin) {
        this.cartList = movies;
        this.cartList.forEach((movie: any) => {
          this.sumaTotal += movie?.price;
        });

      } else {
        movies.forEach((movie: any) => {
          if (movie?.client == user?.userName) {
            this.cartList.push(movie);
            this.sumaTotal += movie?.price;
          }
        });
      }
    }, error => {
      console.log(error);

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

  dismiss() {
    this.modal.dismissAll();
  }

}
