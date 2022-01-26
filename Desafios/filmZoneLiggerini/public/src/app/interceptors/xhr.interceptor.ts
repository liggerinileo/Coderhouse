import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UsersService } from '../service/users/users.service';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  constructor(public router: Router, private authService: UsersService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request?.url?.includes("/api/users/login")) return next.handle(request);

    let token: string = localStorage?.getItem('token') || "";
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    });

    const xhr = request.clone({ url: request.url, headers });
    
    return next.handle(xhr).pipe(catchError(err => {
      if (err.status === 401) {
        this.authService.logout();
        this.router.navigate(['/']);
      
      }
      const error = err.error?.mensaje || err.error?.message || err.statusText;
        console.log(err);
        return throwError(error);
    }))
  }
}
