import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms'
import { Auth } from '../../service/auth';

@Component({
  selector: 'app-login',
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  fb=inject(FormBuilder)
  service=inject(Auth)
  loginForm=this.fb.group({
    username:[''],
    password:['']
  })
  login(){
    console.log(this.loginForm.value);
    this.service.login(this.loginForm.value).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      }
    })
    
  }

}
