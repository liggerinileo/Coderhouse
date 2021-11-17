import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';

fromEvent(document, 'click')
  .pipe(scan(count => count + 1, 0))
  .subscribe(count => console.log(`Clicked ${count} times with rxjs`));

@Component({
  selector: 'app-ejemplo-dos',
  templateUrl: './ejemplo-dos.component.html',
  styleUrls: ['./ejemplo-dos.component.css']
})
export class EjemploDosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
