import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { tap } from 'rxjs/operators';
import { ILogin } from './../models/auth.model';

@Injectable()
export class AuthService {

  constructor(private readonly _http: HttpClient) { }

  public login(credentials: ILogin) {
    const url = `${environment.apiEndpoint}/login`;
    const { email, password } = credentials;
    return this._http.post(url, { email, password }).pipe(tap(/**/));
  }
}
