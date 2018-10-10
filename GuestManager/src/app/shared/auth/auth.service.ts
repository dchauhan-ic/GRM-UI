import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        {
          resolve(this.loggedIn);
        };
      }
    );
    return promise;
  }

  login(username: string, password: string) {
    return this.http.post<any>('/api/oauth2/token', "grant_type=password&username=" + username + "&password=" + password, {
      headers: {
        Authorization: 'Basic MjAxOTY5RTFCRkQyNDJFMTg5RkU3QjYyOTdCMUI1QTQ6QzY1QTBEQzBGMjhDNDY5RkI3Mzc2Rjk3MkRFRkJDQjk='
      }
    }).pipe(map(resp => {
      if (resp && resp.UserName) {
        this.loggedIn = true;
        localStorage.setItem('currentUser', JSON.stringify(resp));
        localStorage.setItem('TenantId', resp.TenantId);
        localStorage.setItem('access_token', resp.access_token);
        localStorage.setItem('authorizedUser', resp.UserName);
        localStorage.setItem('userRoles', 'ServerAdmin');
      }

      return resp;
    }));
  }


  logout() {
    this.loggedIn = false;
    localStorage.removeItem('currentUser');
  }

}