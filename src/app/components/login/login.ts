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
  allusers!: LoginPayload[];
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }
  login() {
    this.service.allusers().subscribe({
      next: (res) => {
        this.allusers = res;
        console.log(this.allusers);
        console.log(this.loginForm.value);
        this.allusers.forEach((user: LoginPayload) => {
          if (user.username.toLowerCase() === this.loginForm.value.username.toLowerCase()) {
            console.log('user found');
            return 'login successful';
          }
          else{
            console.log('user not found');
            return 'login failed';
          }
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
