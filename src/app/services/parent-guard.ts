import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Logic } from './logic';
import {Router} from '@angular/router';

export const parentGuard: CanActivateFn = (route, state) => {
  const logicService = inject(Logic);
  const router = inject(Router);
  if(logicService.loginsuccess()){ 
    return true;
  }
  else{
    return false
  }
};
