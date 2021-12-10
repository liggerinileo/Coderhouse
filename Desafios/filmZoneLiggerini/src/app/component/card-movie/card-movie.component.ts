import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent {

  @Input() url: string | undefined;
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() duration: number | undefined;

  constructor() { }

}
