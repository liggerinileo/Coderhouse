import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/component/card-movie/card';
import { EntityService } from '../entity-service.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService extends EntityService {

  protected path: string = 'movies';

  createMovie(movie: any): Observable<any> {
    let body = {
      image: movie?.image,
      name: movie?.name,
      description: movie?.description,
      duration: movie?.duration,
      year: movie?.year,
      price: movie?.price,
      genre: movie?.genre,
      filmZoneCategory: movie?.filmZoneCategory,
      addedToCart: movie?.addedToCart
    }
    return this.http.post(this.getBaseUrl(), body);
  }

  editUser(movie: any): Observable<any> {
    let body = {
      image: movie?.image,
      name: movie?.name,
      description: movie?.description,
      duration: movie?.duration,
      year: movie?.year,
      price: movie?.price,
      genre: movie?.genre,
      filmZoneCategory: movie?.filmZoneCategory,
      addedToCart: movie?.addedToCart
    }
    return this.http.put(this.getBaseUrl() + '/' + movie.id, body);
  }

}
