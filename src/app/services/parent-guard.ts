import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '../service/auth';

export const parentGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const userrole = authService.getUserRole();
  if (userrole !== 'admin') {
    alert('Access denied. Admins only.');
    return false;
  }
  return true;
};
