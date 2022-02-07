import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/Cart';
import { Movie } from 'src/app/models/Movie';
import { EntityService } from '../entity-service.service';

@Injectable({
  providedIn: 'root'
})
export class CartService extends EntityService {

  protected path: string = 'cart';

  addMovie(movie: Cart): Observable<any> {
    return this.http.post(this.getBaseUrl() + '/add', movie);
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete(this.getBaseUrl() + '/' + id);
  }

  editMovie(movie: Movie | undefined, id: string | undefined): Observable<any> {
    return this.http.put(this.getBaseUrl() + '/' + id, movie);
  }
}