import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from "../../component/card-movie/card";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cartList: Card[] = [];
  cartList: BehaviorSubject<Card[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(card: Card) {
    let item: Card | undefined = this._cartList.find(v1 => v1.title == card.title);
    if (!item) {
      this._cartList.push({... card});
    }
    console.log(this._cartList);

    // Emito el cambio que hubo
    this.cartList.next(this._cartList);
  }
}
