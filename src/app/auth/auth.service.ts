import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { AuthData } from './auth-data.model';

import { environment } from "../../environments/environment";
const BACKEND_URL = environment.apiUrl; //change this in the environment folder

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string;
  private authStatus: {
    auth: boolean;
    name: string;
    email: string;
    admin: boolean;
    beneficiaries: string[];
    verified: boolean;
  };

  private authStatusListener = new Subject<{
    auth: boolean;
    name: string;
    email: string;
    admin: boolean;
    beneficiaries: string[];
    verified: boolean;
  }>();

  private signupListener = new Subject<boolean>();
  private loginListener = new Subject<boolean>();
  private changedPasswordListener = new Subject<boolean>();

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
    return {...this.authStatus};
  }

  getAuthStatusListener() {
    //console.log(this.authStatusListener.asObservable());
    return this.authStatusListener.asObservable();
  }

  getSignupListener() {
    return this.signupListener.asObservable();
  }

  getLoginListener() {
    return this.loginListener.asObservable();
  }

  getChangedPasswordListener() {
    return this.changedPasswordListener.asObservable();
  }

  createUser(
    name: string,
    email: string,
    password: string,
  ) {
    let userObject = {
      name: name,
      email: email,
      password: password,
    };

    return this.http
      .post(BACKEND_URL + 'api/user/signup', userObject)
      .subscribe(
        (result) => {
          this.signupListener.next(true);
          //this.router.navigate['/signup'];
        },
        (error) => {
          console.log("Failed to sign up user.");
          console.log(error);
        }
      );
  }


  /*
   *  SHOULD NOT BE HERE ANYMORE BECAUSE EVERYONE MUST USE THE MAIN SIGNUP FORM.
  createUserAdmin(
    email: string,
    password: string,
    admin: string,
    orgName: string,
    uen: string
  ) {
    let userObject = {
      email: email,
      password: password,
      admin: admin,
      orgName: orgName,
      uen: uen,
      beneficiaries: [],
      verified: false,
    };

    return this.http
      .post(BACKEND_URL + 'api/user/signupAdmin', userObject)
      .subscribe(
        (result) => {
          this.signupListener.next(true);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  */

  update(updatedBeneficiaries: string[]) {
    let userObject = {
      name: this.authStatus.name,
      email: this.authStatus.email,
      admin: this.authStatus.admin,
      beneficiaries: updatedBeneficiaries,
      verified: true,
    };

    this.http
      .put(BACKEND_URL + 'api/user/updateBeneficiaries', userObject)
      .subscribe((response) => {
        console.log("User's beneficiaries updated! At authService.ts");
        console.log(response);

        let updatedObject = {
          auth: true,
          name: this.authStatus.name,
          email: this.authStatus.email,
          admin: this.authStatus.admin,
          beneficiaries: updatedBeneficiaries,
          verified: true,
        };

        this.authStatus = updatedObject;
        this.authStatusListener.next({...updatedObject});
      },
      (error) => {
        this.authStatusListener.next(this.authStatus);
      }
      );
  }

  login(email: string, password: string) {

    //console.log("Login credentials are:");
    //console.log(email);
    //console.log(password); //TODO: REMOVE ON DEPLOYMENT

    const authData: AuthData = {
      email: email,
      password: password,
    };

    this.http
      .post<{
        token: string;
        expiresIn: number;
        name: string;
        email: string;
        admin: boolean;
        beneficiaries: string[];
        verified: boolean;
      }>
      (BACKEND_URL + 'api/user/login', authData)
      .subscribe(
        (response) => {
          const token = response.token;
          this.token = token;

          if (token) {
            const expiresInDuration = response.expiresIn;
            this.setAuthTimer(expiresInDuration);
            this.isAuthenticated = true;
            const rightNow = new Date();
            const expirationDate = new Date(rightNow.getTime() + expiresInDuration * 1000);
            //console.log(response);
            this.saveAuthData(token, expirationDate, response);

            this.authStatus = {
              auth: true,
              name: response.name,
              email: email,
              admin: response.admin,
              beneficiaries: response.beneficiaries,
              verified: true,
            };

            this.authStatusListener.next(this.authStatus);
            this.router.navigate(['/feed']);
          }
        },

        (error) => {
          console.log("Error at logging in! The error is: ");
          console.log(error);
          this.authStatusListener.next({
            auth: false,
            name: null,
            email: null,
            admin: null,
            beneficiaries: null,
            verified: null,
          });
        }
      );
  }




  autoAuthUser() {
    const authInfo =  this.getAuthData();
    if (!authInfo) {
      return;
    }

    const rightNow = new Date();
    const expiresIn = authInfo.expirationDate.getTime() - rightNow.getTime();

    if (expiresIn > 0) {
      this.token = authInfo.token;
      this.isAuthenticated = true;

      this.authStatus = authInfo.authData;
      this.authStatusListener.next(this.authStatus);
    }
  }




  logout() {
    this.token = null;
    this.isAuthenticated = false;

    this.authStatusListener.next({
      auth: false,
      name: null,
      email: null,
      admin: null,
      beneficiaries: null,
      verified: null,
    });

    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/']);
  }

  expiredSession() {
    this.token = null;
    this.isAuthenticated = false;

    this.authStatusListener.next({
      auth: false,
      name: null,
      email: null,
      admin: null,
      beneficiaries: null,
      verified: null,
    });

    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/expiredSession']);
  }

  private setAuthTimer(duration: number) {
    console.log("Setting timer" + duration);
    this.tokenTimer = setTimeout(() => {
      //this.logout();
      this.expiredSession();
    }, duration * 1000);
  }

  private saveAuthData(
    token: string,
    expirationDate: Date,
    response: {
      token: string;
      expiresIn: number;
      name: string;
      email: string;
      admin: boolean;
      beneficiaries: string[];
      verified: boolean;
    })
  {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('response', JSON.stringify(response));
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("response");
  }

  public getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const retrievedDataObject = JSON.parse(localStorage.getItem("response"));

    if (!token || !expirationDate) {
      return;
    }

    return {
      token: token,
      expirationDate: new Date(expirationDate),
      authData: retrievedDataObject
    };
  }


  changePassword(currentPassword: string, newPassword: string) {
    let userObject = {
      name: this.authStatus.name,
      email: this.authStatus.email,
      admin: this.authStatus.admin,
      beneficiaries: this.authStatus.beneficiaries,
      verified: true,
      currentPassword: currentPassword,
      newPassword: newPassword,
    };
    this.http
      .put(BACKEND_URL + 'api/user/updatePassword', userObject)
      .subscribe((response) => {
        console.log("User's password updated! At authService.ts");
        this.changedPasswordListener.next(true);
        console.log(response);
      });
  }

  forgetPassword(email: string) {
    let userObject = { email: email};

    this.http
      .put(BACKEND_URL + 'api/user/forgetPassword', userObject)
      .subscribe((response) => {
        console.log("User's password reset! At authService.ts");
        console.log(response);
        this.loginListener.next(true);
      },
      (error) => {
        console.log(error);
      });
  }














}
