import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from "../../component/card-movie/card";
import { EntityService } from '../entity-service.service';

@Injectable({
  providedIn: 'root'
})
export class CartService extends EntityService {

  protected path: string = 'cart';

  addToCart(movie: Card) {
    this.getAll().subscribe(movies => {
      let item: Card | undefined = movies.find((v1: { name: string; }) => v1.name == movie.name);
      if (!item) {
        this.addMovie(movie).subscribe(res => {
          console.log(res);

        }, error => {
          console.log(error);

        });
      }
    }, error => {
      console.log(error);

    });
  }

  addMovie(movie: Card): Observable<any> {
    return this.http.post(this.getBaseUrl(), movie);
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete(this.getBaseUrl() + '/' + id);
  }
}