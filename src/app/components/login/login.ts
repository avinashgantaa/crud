import { Component, inject, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Auth, LoginPayload } from '../../service/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  router=inject(Router);
  fb = inject(FormBuilder);
  service = inject(Auth);
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }
  login() {
    let { username, password } = this.loginForm.value;
    this.service.allusers().subscribe({
      next: (res) => {
        let isUserFound = res.find((user: LoginPayload) => {
          return (
            user.username.toLowerCase() === username.toLowerCase() && user.password === password
          );
        });
        if (isUserFound) {
          this.router.navigate(['/main']);
        } else {
          console.log('Invalid Credentials');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
