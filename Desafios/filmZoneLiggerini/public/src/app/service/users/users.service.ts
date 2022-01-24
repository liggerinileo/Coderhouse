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

  editUser(user: any): Observable<any> {
    let body = {
      name: user?.name,
      lastName: user?.lastName,
      userName: user?.userName,
      email: user?.email,
      password: user?.password,
      admin: user?.admin
    }
    return this.http.patch(this.getBaseUrl() + '/' + user.id, body);
  }

}
