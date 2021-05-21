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
  private authStatus: {auth: boolean, role: string, orgName: string, uen: string};
  private authStatusListener = new Subject<{auth: boolean, role: string, orgName: string, uen: string}>();
  private isAuthenticated = false;
  private tokenTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  getIsAuth() {
    return this.isAuthenticated;
  }

  getToken() {
    return this.token;
  }

  getAuthStatusObject() {
    return this.authStatus;
  }

  getAuthStatusListener() {
    console.log(this.authStatusListener.asObservable());
    return this.authStatusListener.asObservable();
  }

  createUser(email: string, password: string, role: string, orgName: string, uen: string) {

    /*
    const authData: AuthData = {
      email: email,
      password: password,
      role: role,
    }
    */

    let userObject = {email: email, password: password, role: role, orgName: orgName, uen: uen};
    return this.http.post("http://localhost:3000/api/user/signup", userObject)
    .subscribe(() => {
      //this.router.navigate['/signup'];
    }, error => {
      this.authStatusListener.next({auth: false, role: null, orgName: null, uen: null});
    });
  }

  login(email: string, password: string, role: string) {
    const authData: AuthData = {
      email: email,
      password: password,
      role: role,
    };

    this.http
    .post<{token: string, expiresIn: number, orgName: string, uen: string}>("http://localhost:3000/api/user/login", authData)
    .subscribe(response => {
      const token = response.token;
      this.token = token;
      if (token) {
        const expiresInDuration = response.expiresIn;
        this.tokenTimer = setTimeout(() => {
          this.logout();
        }, expiresInDuration * 1000);
        this.isAuthenticated = true;

        this.authStatus = {auth: true, role: role, orgName: response.orgName, uen: response.uen};
        this.authStatusListener.next({auth: true, role: role, orgName: response.orgName, uen: response.uen});
        this.router.navigate(['/feed']);
      }
    }, error => {
      this.authStatusListener.next({auth: false, role: null, orgName: null, uen: null});
    })
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;

    this.authStatusListener.next({auth: false, role: null, orgName: null, uen: null});
    this.router.navigate(['/']);
    clearTimeout(this.tokenTimer);
  }

}
