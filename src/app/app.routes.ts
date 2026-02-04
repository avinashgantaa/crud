import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import  { Logincontainer } from './smartcomponents/logincontainer/logincontainer';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Logincontainer },
  { path: 'main', component: Main },
];
