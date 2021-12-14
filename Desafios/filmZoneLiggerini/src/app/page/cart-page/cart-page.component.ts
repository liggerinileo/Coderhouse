import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  list: any[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.list);
    
  }

  agregarList(movie: {}) {
    this.list.push(movie);
  }

}
