import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntityService } from "../entity-service.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends EntityService {
  
  protected path: string = 'users';

  createUser(user: any): Observable<any> {
    let body = {
      fullname: user?.fullname,
      userName: user?.userName,
      email: user?.email,
      password: user?.password
    }
    return this.http.post(this.getBaseUrl(), body);
  }

  editUser(user: any): Observable<any> {
    let body = {
      name: user?.name,
      lastName: user?.lastName,
      userName: user?.userName,
      email: user?.email,
      password: user?.password
    }
    return this.http.patch(this.getBaseUrl() + '/' + user.id, body);
  }

}
