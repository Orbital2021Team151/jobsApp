import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { AuthData } from './auth-data.model';
import { map } from "rxjs/operators";

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

  private users: {
    name: string;
    email: string;
    admin: boolean;
    beneficiaries: string[];
    verified: boolean;
    ban: boolean;
  }[];

  private usersListener = new Subject<{
    name: string;
    email: string;
    admin: boolean;
    beneficiaries: string[];
    verified: boolean;
    ban: boolean;
  }[]>();

  private signupListener = new Subject<boolean>();
  private isLoggingInListener = new Subject<boolean>();
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

  getUsers() {
    this.http.get<{message: string, users: any}>(BACKEND_URL + 'api/user/getUsers')
    .pipe(map(userData => {
      return userData.users.map(user => {
        return {
          name: user.name,
          email: user.email,
          admin: user.admin,
          beneficiaries: user.beneficiaries,
          verified: user.verified,
          ban: user.ban
        };
      });
    }))
    .subscribe((mappedUsers) => {
      //console.log("get users mapped successful. mapped users are: ");
      //console.log(mappedUsers);
      this.users = mappedUsers;
      this.usersListener.next([...this.users]);
    });
  }

  getUsersObject() {
    this.getUsers();
    return {...this.users};
  }

  getUsersListener() {
    return this.usersListener.asObservable();
  }

  getSignupListener() {
    return this.signupListener.asObservable();
  }

  getIsLoggingInListener() {
    return this.isLoggingInListener.asObservable();
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
          //console.log("Failed to sign up user.");
          //console.log(error);
        }
      );
  }

  updateBeneficiaries(updatedBeneficiaries: string[]) {

    //TODO: Either make a new method for getUser to use on updateBeneficiaries or update localStorage's response (and toolbar does not reset?);
    const retrievedDataObject = JSON.parse(localStorage.getItem("response"));
    let userObject = {
      token: retrievedDataObject.token,
      expiresIn: retrievedDataObject.expiresIn,
      name: this.authStatus.name,
      email: this.authStatus.email,
      admin: this.authStatus.admin,
      beneficiaries: updatedBeneficiaries,
      verified: true
    };
    localStorage.setItem('response', JSON.stringify(userObject));

    this.http
      .put(BACKEND_URL + 'api/user/updateBeneficiaries', userObject)
      .subscribe((response) => {
        console.log("User's beneficiaries updated!");

        let updatedObject = {
          auth: true,
          name: this.authStatus.name,
          email: this.authStatus.email,
          admin: this.authStatus.admin,
          beneficiaries: updatedBeneficiaries,
          verified: true,
        };

        this.authStatus = updatedObject;
        this.authStatusListener.next({...this.authStatus});
      },
      (error) => {
        this.authStatusListener.next(this.authStatus);
      }
      );
  }

  login(email: string, password: string) {

    this.isLoggingInListener.next(true);

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
        ban: boolean;
      }>
      (BACKEND_URL + 'api/user/login', authData)
      .subscribe(
        (response) => {
          this.isLoggingInListener.next(false);

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

            if (this.authStatus.admin) {
              this.router.navigate(['/approvePosts']);
            } else {
              this.router.navigate(['/feed']);
            }
          }
        },

        (error) => {
          this.isLoggingInListener.next(false);
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
        console.log("User's password updated!");
        this.changedPasswordListener.next(true);
      });
  }

  forgetPassword(email: string) {
    let userObject = { email: email};
    this.http
      .put(BACKEND_URL + 'api/user/forgetPassword', userObject)
      .subscribe((response) => {
        console.log("User's password reset!");
      },
      (error) => {
        console.log("User's password reset failed!");
        console.log(error);
      });
  }

  banUser(email: string) {
    //console.log("Email received at authService is: ")
    //console.log(email)

    let emailObject = {
      email: email,
    }

    this.http.put(BACKEND_URL + 'api/user/banUser', emailObject)
    .subscribe(result => {
      this.getUsers();
    },
    error => {
      console.log("Error occured at banUser");
      console.log(error);
    });
  }

  unbanUser(email: string) {
    let emailObject = {
      email: email,
    }

    this.http.put(BACKEND_URL + 'api/user/unbanUser', emailObject)
    .subscribe(result => {
      this.getUsers();
    },
    error => {
      console.log("Error occured at unbanUser");
      console.log(error);
    });
  }

  makeAdmin(email: string) {
    let emailObject = {
      email: email,
    }

    this.http.put(BACKEND_URL + 'api/user/makeAdmin', emailObject)
    .subscribe(result => {
      this.getUsers();
    },
    error => {
      console.log("Error occured at makeAdmin");
      console.log(error);
    });
  }

  removeAdmin(email: string) {
    let emailObject = {
      email: email,
    }

    this.http.put(BACKEND_URL + 'api/user/removeAdmin', emailObject)
    .subscribe(result => {
      this.getUsers();
    },
    error => {
      console.log("Error occured at removeAdmin");
      console.log(error);
    });
  }













}
