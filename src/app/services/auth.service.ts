import { Injectable } from '@angular/core';
import { Role } from '../models/role';
import { User } from '../models/user';

@Injectable()
export class AuthService {
  private user: User;

  isAuthorized(){
    return !!this.user;
  }

  hasRole(role: Role){
    return this.isAuthorized() && this.user.role === role;
  }

  login(role: Role){
    this.user = {role: role};
  }

  logout(){
    this.user = null;
  }

  constructor() { }
}
