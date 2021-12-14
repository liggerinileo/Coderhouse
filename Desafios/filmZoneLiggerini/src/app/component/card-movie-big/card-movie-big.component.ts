import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-movie-big',
  templateUrl: './card-movie-big.component.html',
  styleUrls: ['./card-movie-big.component.scss']
})
export class CardMovieBigComponent implements OnInit {

  @Input() url: string | undefined;
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() duration: number | undefined;

  @Output() newMovie: any = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  agregarPeli() {
    let movie = {
      url: this.url,
      title: this.title
    }
    this.newMovie.emit(movie);
    
  }

}
