import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../models/loginUser';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Login {
  constructor(private http: HttpClient) {}

  public login(login: LoginUser): Observable<any> {
    console.log(login);

    return this.http.get<any>('assets/mocks/loginMock.json');
  }
}
