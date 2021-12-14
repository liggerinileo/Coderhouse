import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  @Output() newMovie: any = new EventEmitter<any>();

  constructor() { }


  agregarPeli() {
    let movie = {
      url: this.url,
      title: this.title
    }
    this.newMovie.emit(movie);
    
  }
}
