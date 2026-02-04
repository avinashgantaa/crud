import { Component, inject } from '@angular/core';
import { Login } from "../../components/login/login";
import { Auth } from '../../service/auth'; 
import {Router} from '@angular/router';

@Component({
  selector: 'app-logincontainer',
  imports: [Login],
  templateUrl: './logincontainer.html',
  styleUrl: './logincontainer.css',
})
export class Logincontainer {
  router=inject(Router);
  service=inject(Auth);
  onFormSubmit(formValue: any) {
    console.log('Form submitted with value:', formValue.value);
    let isValidUser = false;
    let {username, password} = formValue.value;
    this.service.allusers().subscribe({
      next:(users)=>{
        console.log('Users fetched:', users);
        isValidUser=users.some(user=>user.username===username && user.password===password);
        if(isValidUser){
          this.router.navigate(['/main']);
        }
      }
    })
  }

}
