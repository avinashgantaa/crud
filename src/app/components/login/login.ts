import { Component, inject, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Auth, LoginPayload } from '../../service/auth';

@Component({
  selector: 'app-login',
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
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
          console.log('Login Successful');
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
