import { Injectable } from '@angular/core';
import { URLSearchParams, Http, Headers } from '@angular/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ResourceService {

  constructor(
    private http:Http,
    private authService:AuthService
  ) {
    this.http = http;
    this.authService = authService;
  }

  getResources() {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.authService.prepEndpoint('resources/');
    return this.http.get(ep, {headers:headers})
      .map(res => res.json());
  }

  getResourcesFor(resource) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.authService.prepEndpoint('resources/'+resource);
    return this.http.get(ep, {headers:headers})
      .map(res => res.json());
  }

}
