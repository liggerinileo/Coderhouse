import { Component, OnInit } from '@angular/core';

let count = 0;
document.addEventListener('click', () => console.log(`Clicked ${++count} times with js`));

@Component({
  selector: 'app-ejemplo-uno',
  templateUrl: './ejemplo-uno.component.html',
  styleUrls: ['./ejemplo-uno.component.css']
})
export class EjemploUnoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
