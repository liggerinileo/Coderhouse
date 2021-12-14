import { Component, OnInit } from '@angular/core';
import { Card } from "./../../component/card-movie/card";
import { CartService } from "../../service/cart.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cartList$: Observable<Card[]> | undefined;
  movie: {} = {};

  constructor(private cartService: CartService) { 
    this.cartList$ = cartService.cartList.asObservable();
  }

  ngOnInit(): void {}

  agregarList() {
    
  }

}
