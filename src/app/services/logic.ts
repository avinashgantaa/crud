import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Logic {
  login() {
    localStorage.setItem('isLoggedIn', 'true');
  }
  logout() {
    localStorage.setItem('isLoggedIn', 'false');
  }
  loginsuccess() {
   return localStorage.getItem('isLoggedIn') === 'true';
  }
}
