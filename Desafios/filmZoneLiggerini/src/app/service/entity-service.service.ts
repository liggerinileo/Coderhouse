import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export abstract class EntityService {

  protected abstract path: string;

  constructor(protected http: HttpClient) { }

  protected getBaseUrl(): string {
    return environment.baseApiUrl + this.path;
  }

  public getAll(findBy: string | null): Observable<any> {
    return this.http.get(this.getBaseUrl() + findBy);

  }

  public get(findBy: string | null, id: number | null): Observable<any> {
    return this.http.get(this.getBaseUrl() + findBy + '/' + id);
  
  }

}
