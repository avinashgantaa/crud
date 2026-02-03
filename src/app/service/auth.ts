import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
export interface LoginPayload {
  username: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class Auth {
  http = inject(HttpClient);
  login(payload: LoginPayload): Observable<string> {
    return this.http.post<string>('http://localhost:3000/users', payload);
  }

  allusers(): Observable<LoginPayload[]> {
    return this.http.get<LoginPayload[]>('http://localhost:3000/users');
  }
}
