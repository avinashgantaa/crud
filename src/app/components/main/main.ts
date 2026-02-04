import { Component, inject } from '@angular/core';
import { Logic } from '../../services/logic'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  service = inject(Logic);
  router=inject(Router);
  logout() {
    this.service.logout();
    this.router.navigate(['/login']);
  }
}
