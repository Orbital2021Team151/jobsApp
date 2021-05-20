import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthData } from './auth-data.model';

@Injectable({
  providedIn: "root"
})
export class AuthService {

  private token: string;
  private authStatusListener = new Subject<{auth: boolean, role: string}>();
  private isAuthenticated = false;
  private tokenTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  getIsAuth() {
    return this.isAuthenticated;
  }

  getToken() {
    return this.token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createUser(email: string, password: string, role: string) {
    const authData: AuthData = {
      email: email,
      password: password,
      role: role,
    }
    this.http.post("http://localhost:3000/api/user/signup", authData)
      .subscribe(res => {
        console.log(res);
      });
  }

  login(email: string, password: string, role: string) {
    const authData: AuthData = {
      email: email,
      password: password,
      role: role,
    };

    this.http
    .post<{token: string, expiresIn: number}>("http://localhost:3000/api/user/login", authData)
    .subscribe(response => {
      const token = response.token;
      this.token = token;
      if (token) {

        console.log("Token retrieved from login is: ");
        console.log(token);
        console.log("Role for this person is: ");
        console.log(role);

        const expiresInDuration = response.expiresIn;
        this.tokenTimer = setTimeout(() => {
          this.logout();
        }, expiresInDuration * 1000);
        this.isAuthenticated = true;
        this.authStatusListener.next({auth: true, role: role});
        this.router.navigate(['/dashboard']);
      }
    })
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next({auth: true, role: null});
    this.router.navigate(['/']);
    clearTimeout(this.tokenTimer);
  }

}
