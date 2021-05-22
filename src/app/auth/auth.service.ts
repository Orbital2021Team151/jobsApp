import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthData } from './auth-data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string;
  private authStatus: {
    auth: boolean;
    id: string;
    email: string;
    password: string;
    role: string;
    orgName: string;
    uen: string;
    beneficiaries: string[];
  };
  private authStatusListener = new Subject<{
    auth: boolean;
    id: string;
    email: string;
    password: string;
    role: string;
    orgName: string;
    uen: string;
    beneficiaries: string[];
  }>();
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

  createUser(
    email: string,
    password: string,
    role: string,
    orgName: string,
    uen: string
  ) {
    let userObject = {
      email: email,
      password: password,
      role: role,
      orgName: orgName,
      uen: uen,
      beneficiaries: [''],
    };

    return this.http
      .post('http://localhost:3000/api/user/signup', userObject)
      .subscribe(
        () => {
          //this.router.navigate['/signup'];
        },
        (error) => {
          this.authStatusListener.next({
            auth: false,
            id: null,
            email: null,
            password: null,
            role: null,
            orgName: null,
            uen: null,
            beneficiaries: null,
          });
        }
      );
  }

  update(updatedBeneficiaries: string[]) {
    let userObject = {
      id: this.authStatus.id,
      email: this.authStatus.email,
      password: this.authStatus.password,
      role: this.authStatus.role,
      orgName: this.authStatus.orgName,
      uen: this.authStatus.uen,
      beneficiaries: updatedBeneficiaries,
    };
    this.http
      .put('http://localhost:3000/api/user/update', userObject)
      .subscribe((response) => {
        console.log("User's beneficiaries updated! At authService.ts");
        console.log(response);
        let updatedObject = {
          auth: true,
          id: this.authStatus.id,
          email: this.authStatus.email,
          password: this.authStatus.password,
          role: this.authStatus.role,
          orgName: this.authStatus.orgName,
          uen: this.authStatus.uen,
          beneficiaries: updatedBeneficiaries,
        };
        this.authStatus = updatedObject;
        //this.authStatusListener.next([...this.authStatus]);
      });
  }

  login(email: string, password: string, role: string) {
    const authData: AuthData = {
      email: email,
      password: password,
      role: role,
    };

    this.http
      .post<{
        token: string;
        expiresIn: number;
        id: string;
        email: string;
        password: string;
        orgName: string;
        role: string;
        uen: string;
        beneficiaries: string[];
      }>('http://localhost:3000/api/user/login', authData)
      .subscribe(
        (response) => {
          const token = response.token;
          this.token = token;

          if (token) {
            const expiresInDuration = response.expiresIn;
            this.tokenTimer = setTimeout(() => {
              this.logout();
            }, expiresInDuration * 1000);
            this.isAuthenticated = true;

            this.authStatus = {
              auth: true,
              id: response.id,
              email: email,
              password: password,
              role: role,
              orgName: response.orgName,
              uen: response.uen,
              beneficiaries: response.beneficiaries,
            };
            this.authStatusListener.next({
              auth: true,
              id: response.id,
              email: email,
              password: password,
              role: role,
              orgName: response.orgName,
              uen: response.uen,
              beneficiaries: response.beneficiaries,
            });
            this.router.navigate(['/feed']);
          }
        },
        (error) => {
          this.authStatusListener.next({
            auth: false,
            id: null,
            email: null,
            password: null,
            role: null,
            orgName: null,
            uen: null,
            beneficiaries: null,
          });
        }
      );
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;

    this.authStatusListener.next({
      auth: false,
      id: null,
      email: null,
      password: null,
      role: null,
      orgName: null,
      uen: null,
      beneficiaries: null,
    });
    this.router.navigate(['/']);
    clearTimeout(this.tokenTimer);
  }
}
