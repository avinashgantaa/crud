import { CanActivateFn } from '@angular/router';
import {Auth} from '../service/auth';
import { inject } from '@angular/core';

export const parentGuard: CanActivateFn = (route, state) => {
  return true;
};
