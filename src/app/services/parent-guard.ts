import { CanActivateFn } from '@angular/router';
import { inject, signal } from '@angular/core';
import { Logic } from './logic';

export const parentGuard: CanActivateFn = (route, state) => {
  const logicService = inject(Logic);
  if(logicService.loginsuccess()){ 
    return true;
  }
  return false;
};
