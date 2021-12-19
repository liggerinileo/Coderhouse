import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  api = 'https://jsonplaceholder.typicode.com';

  constructor(protected http: HttpClient) { }


  public getPosts(): Observable<any> {
    return this.http.get(this.api + '/posts');
  }

  public getPost(id: number): Observable<any> {
    return this.http.get(this.api + '/posts/'+ id);
  }
}
