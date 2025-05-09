import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUser = {
    username: 'john',
    role: 'seller'
  };

  getUserRole(): string {
    return this.currentUser.role;
  }
}
