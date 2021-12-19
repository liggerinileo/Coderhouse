import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pc } from '../component/pc-list/Pc';

@Injectable({
  providedIn: 'root'
})
export class PcCartService {

  private _cartList: Pc[] = [];
  cartList: BehaviorSubject<Pc[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(pcComponent: Pc) {
    let item: Pc | undefined;
    item = this._cartList.find(v1 => v1.name == pcComponent.name);
    if (!item) {
      this._cartList.push({... pcComponent});
    } else {
      item.quantity += pcComponent.quantity;
    }
    console.log(this._cartList);

    // Emito el cambio que hubo
    this.cartList.next(this._cartList);
  }
  
}
