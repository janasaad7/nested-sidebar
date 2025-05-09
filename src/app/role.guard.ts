import {CanActivateFn, Router} from '@angular/router';
import { AuthService} from './auth.service';
import {inject} from '@angular/core';

export const roleGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const userRole = authService.getUserRole();
  const allowedRoles = route.data['roles'] as string[];

  if (allowedRoles.includes(userRole)) {
    return true;
  }
  console.log(userRole);
  alert('You are not authorized to access this page!');
  return router.parseUrl('/');
};
