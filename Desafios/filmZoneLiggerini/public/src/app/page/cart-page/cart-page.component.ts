import { Component, OnInit } from '@angular/core';
import { CartService } from "../../service/cart/cart.service";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users/users.service';
import { Cart } from 'src/app/models/Cart';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { MoviesService } from 'src/app/service/movies/movies.service';

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

  constructor(private router: Router, private cartService: CartService, 
    private userService: UsersService, private moviesService: MoviesService, private modal: NgbModal) {}

  ngOnInit(): void {
    this.load();
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
