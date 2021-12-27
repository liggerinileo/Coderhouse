import { Component, OnInit } from '@angular/core';
import { Card } from "./../../component/card-movie/card";
import { CartService } from "../../service/cart/cart.service";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cartList: Card[] = [];

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.cartService.getAll().subscribe(movies => {
      this.cartList = movies;

    }, error => {
      console.log(error);

    });
  }

  delete(id: any) {
    this.cartService.deleteMovie(id).subscribe(res => {
      console.log(res);
      this.load();

    }, error => {
      console.log(error);

    });
  }

}
