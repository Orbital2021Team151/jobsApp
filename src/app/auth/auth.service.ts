import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { AuthData } from './auth-data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string;
  private authStatus: {
    auth: boolean;
    email: string;
    role: string;
    orgName: string;
    uen: string;
    beneficiaries: string[];
    verified: boolean;
  };

  private authStatusListener = new Subject<{
    auth: boolean;
    email: string;
    role: string;
    orgName: string;
    uen: string;
    beneficiaries: string[];
    verified: boolean;
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
      beneficiaries: [],
      verified: false,
    };

    return this.http
      .post('http://localhost:3000/api/user/signup', userObject)
      .subscribe(
        () => {
          //this.router.navigate['/signup'];
        },
        (error) => {
          console.log(error);
          this.authStatusListener.next({
            auth: false,
            email: null,
            role: null,
            orgName: null,
            uen: null,
            beneficiaries: null,
            verified: null,
          });
        }
      );
  }


  createUserAdmin(
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
      beneficiaries: [],
      verified: false,
    };

    return this.http
      .post('http://localhost:3000/api/user/signupAdmin', userObject)
      .subscribe(
        () => {
          //this.router.navigate['/signup'];
        },
        (error) => {
          console.log(error);
          this.authStatusListener.next({
            auth: false,
            email: null,
            role: null,
            orgName: null,
            uen: null,
            beneficiaries: null,
            verified: null,
          });
        }
      );
  }



  update(updatedBeneficiaries: string[]) {
    let userObject = {
      email: this.authStatus.email,
      role: this.authStatus.role,
      orgName: this.authStatus.orgName,
      uen: this.authStatus.uen,
      beneficiaries: updatedBeneficiaries,
      verified: true,
    };
    this.http
      .put('http://localhost:3000/api/user/update', userObject)
      .subscribe((response) => {
        console.log("User's beneficiaries updated! At authService.ts");
        console.log(response);
        let updatedObject = {
          auth: true,
          email: this.authStatus.email,
          role: this.authStatus.role,
          orgName: this.authStatus.orgName,
          uen: this.authStatus.uen,
          beneficiaries: updatedBeneficiaries,
          verified: true,
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
        email: string;
        orgName: string;
        role: string;
        uen: string;
        beneficiaries: string[];
        verified: boolean;
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
              email: email,
              role: role,
              orgName: response.orgName,
              uen: response.uen,
              beneficiaries: response.beneficiaries,
              verified: true,
            };
            this.authStatusListener.next({
              auth: true,
              email: email,
              role: role,
              orgName: response.orgName,
              uen: response.uen,
              beneficiaries: response.beneficiaries,
              verified: true,
            });
            this.router.navigate(['/feed']);
          }
        },
        (error) => {
          this.authStatusListener.next({
            auth: false,
            email: null,
            role: null,
            orgName: null,
            uen: null,
            beneficiaries: null,
            verified: null,
          });
        }
      );
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;

    this.authStatusListener.next({
      auth: false,
      email: null,
      role: null,
      orgName: null,
      uen: null,
      beneficiaries: null,
      verified: null,
    });
    this.router.navigate(['/']);
    clearTimeout(this.tokenTimer);
  }
}
