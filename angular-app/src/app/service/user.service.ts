import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly _apiUrl = 'http://192.168.188.3/api/';

  constructor(private _http: HttpClient, private router: Router) { }

  loginUser(user: any) {
    return this._http.post(`${this._apiUrl}login_check`, user);
  }

  registerUser(user: any) {
    return this._http.post(`${this._apiUrl}users`, user);
  }

  loggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
  getUserId() {
    return localStorage.getItem('userId');
  }

  getUserProfil(id: any) {
    return this._http.get(`${this._apiUrl}users/${id}`);
  }

  updateUser(id: any, data: any) {
    return this._http.put(`${this._apiUrl}users/${id}`, data);
  }


}
