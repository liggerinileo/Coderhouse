import { Component, OnInit } from '@angular/core';
import { PcCartService } from '../../service/pc-cart.service';
import { Pc } from './Pc';

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.scss']
})
export class PcListComponent implements OnInit {

  pcComponents: Pc[] = [
    {
      "name": "Intel Core i9 9900k",
      "price": 899.99,
      "stock": 7,
      "image": "https://www.xt-pc.com.ar/img/productos/Pics_Prod/CPU456.jpg",
      "quantity": 0,
    },
    {
      "name": "EVGA GeForce RTX 2080ti",
      "price": 1199.99,
      "stock": 5,
      "image": "https://images.evga.com/products/gallery/png/11G-P4-2487-RX_LG_1.png",
      "quantity": 0,
    },
    {
      "name": "Gigabyte Z490 Aorus Master",
      "price": 1799.99,
      "stock": 10,
      "image": "https://computermans.com/wp-content/uploads/2020/05/13-145-196-V08-1.jpg",
      "quantity": 0,
    },
    {
      "name": "Viewsonic 24' Curvo 144Hz Full HD",
      "price": 499.99,
      "stock": 0,
      "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16407_Monitor_Gamer_Viewsonic_24__Curvo_VX2458-C-MHD_144Hz_Full_HD_46578010-grn.jpg",
      "quantity": 0,
    },
    {
      "name": "Silla Dxracer",
      "price": 299.99,
      "stock": 4,
      "image": "https://http2.mlstatic.com/D_NQ_NP_922626-MLA31662361773_082019-O.jpg",
      "quantity": 0,
    },
  ]  

  constructor(private cart: PcCartService) { }

  ngOnInit(): void {
  }

  addToCart(pcComponent: Pc): void {
    if (pcComponent.quantity > 0) {
      this.cart.addToCart(pcComponent);
      pcComponent.stock -= pcComponent.quantity;
      pcComponent.quantity = 0;
    }
    console.log(pcComponent);
  }

}
