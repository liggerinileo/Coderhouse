import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PcCartService } from '../../service/pc-cart.service';
import { Pc } from '../pc-list/Pc';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Pc[]>;

  constructor(private cart: PcCartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
