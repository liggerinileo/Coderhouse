import { Component, OnInit } from '@angular/core';

import { of } from 'rxjs';
import { count, find, map } from 'rxjs/operators';

of(1, 2, 3, 4, 5)
  .pipe(find(v => v == 3))
  .subscribe((v) => console.log(`value: ${v}`));

function* demog(){
  yield 1;
  yield 2;
}

let myDemo = demog();
console.log(myDemo.next().value);
console.log(myDemo.next().value);


@Component({
  selector: 'app-ejemplo-tres',
  templateUrl: './ejemplo-tres.component.html',
  styleUrls: ['./ejemplo-tres.component.css']
})
export class EjemploTresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
