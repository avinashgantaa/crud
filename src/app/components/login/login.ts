import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
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
  @Output() form:EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  router=inject(Router);
  fb = inject(FormBuilder);
  service = inject(Auth);
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm =   this.fb.group({
        username: [''],
        password: [''],
      });
    }
    
    onSubmit() {
    this.form.emit(this.loginForm);
  }

}
