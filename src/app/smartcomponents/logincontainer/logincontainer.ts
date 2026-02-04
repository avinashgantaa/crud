import { Component, inject } from '@angular/core';
import { Login } from '../../components/login/login';
import { Auth } from '../../service/auth';
import { Router } from '@angular/router';
import { Logic } from '../../services/logic';

@Component({
  selector: 'app-logincontainer',
  imports: [Login],
  templateUrl: './logincontainer.html',
  styleUrl: './logincontainer.css',
})
export class Logincontainer {
  router = inject(Router);
  service = inject(Auth);
  logic = inject(Logic);
  onFormSubmit(formValue: any) {
    let isValidUser = false;
    let { username, password } = formValue.value;
    console.log(formValue.value);
    this.service.allusers().subscribe({
      next: (users) => {
        isValidUser = users.some(
          (user) =>
            user.username.toLowerCase() === username.toLowerCase() && user.password === password,
        );
        if (isValidUser) {
          this.logic.login();
          this.router.navigate(['/main']);
        }
        else {
          console.log('Invalid credentials or not an admin user.');
        }
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      },
    });
  }
}
