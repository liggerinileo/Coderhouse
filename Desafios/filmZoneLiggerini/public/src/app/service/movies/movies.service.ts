import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/Movie';
import { EntityService } from '../entity-service.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService extends EntityService {

  protected path: string = 'movies';
  movie: any;

  createMovie(movie: Movie): Observable<any> {
    return this.http.post(this.getBaseUrl() + "/add", movie);
  }

  editMovie(movie: Movie, id: any): Observable<any> {
    return this.http.put(this.getBaseUrl() + '/' + id, movie);
  }

  setMovie(movie: any) {
    this.movie = movie;
  }

  getMovie() {
    return this.movie;
  }

  delete(id: any) {
    return this.http.delete(this.getBaseUrl() + '/' + id);
  }

}
