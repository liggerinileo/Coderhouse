import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tabla: boolean;

  constructor() { 
    this.tabla = true;
  }

  ngOnInit(): void {
  }

  ocultarTabla() {
    this.tabla = false;
  }

  mostrarTabla() {
    this.tabla = true;
  }

}
