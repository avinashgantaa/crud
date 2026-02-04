import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface LoginPayload {
  username: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class Auth {
  http = inject(HttpClient);

  allusers(): Observable<LoginPayload[]> {
    return this.http.get<LoginPayload[]>('http://localhost:3000/users');
  }

  getUserRole(data:LoginPayload): Observable<string> {
   return this.http.post<string>('http://localhost:3000/users', data);

  }
}
