import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }
  canActivate(): boolean {
    if (!this.userService.loggedIn()) {
      this.router.navigate(['login']);
      return false;
    } else {
      return true;
    }
  }
}
