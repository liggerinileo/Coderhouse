import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { EntityService } from "../entity-service.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends EntityService {
  
  protected path: string = 'users';
  user: any;

  setUser(user: any) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  login(user: User): Observable<any> {
    return this.http.post(this.getBaseUrl() + '/login', user);
  }

  createUser(user: User): Observable<any> {
    return this.http.post(this.getBaseUrl() + '/add', user);
  }

  edit(user: User | undefined, id: string | undefined): Observable<any> {
    return this.http.put(this.getBaseUrl() + '/' + id, user);
  }

  logout() {
    localStorage.clear();
  }

  delete(id: string | undefined) {
    return this.http.delete(this.getBaseUrl() + '/' + id);
  }

}
