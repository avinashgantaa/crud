import { Component, inject,OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms'
import { Auth, LoginPayload } from '../../service/auth';

@Component({
  selector: 'app-login',
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  fb=inject(FormBuilder)
  service=inject(Auth)
  loginForm!:FormGroup
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:[''],
      password:['']
    })

  }
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
