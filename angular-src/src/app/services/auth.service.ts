import { Injectable } from '@angular/core';
import { URLSearchParams, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  isDev: boolean = false;

  constructor(
    private http:Http
  ) {}

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    // Observable that can be subscribed to
    let ep = this.prepEndpoint('users/register');
    return this.http.post(ep, user, {headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('users/authenticate');
    return this.http.post(ep, user, {headers: headers})
      .map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('users/profile');
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  getUserId() {
    let user = JSON.parse(localStorage.getItem('user'));
    return user.id;
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    this.authToken = localStorage.getItem('id_token');
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  prepEndpoint(ep){
    if (this.isDev) {
      return ep;
    } else {
      return 'http://localhost:8080/'+ep;
    }
  }

}
