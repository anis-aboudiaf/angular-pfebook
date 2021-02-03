import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TokensInterceptorService implements HttpInterceptor {

  constructor(private userService: UserService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.userService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
