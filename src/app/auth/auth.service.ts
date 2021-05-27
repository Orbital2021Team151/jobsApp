import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { AuthData } from './auth-data.model';


const localhost = "http://localhost:3000/";


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
  signedUp = false;

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
      .post('api/user/signup', userObject) //heroku
      //.post(localhost + 'api/user/signup', userObject)
      .subscribe(
        () => {
          this.signedUp = true;
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
      .post('api/user/signupAdmin', userObject) //heroku
      //.post(localhost + 'api/user/signupAdmin', userObject)
      .subscribe(
        () => {
          this.signedUp = true;
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
      .put('api/user/update', userObject) //heroku
      //.put(localhost + 'api/user/update', userObject)
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
      }>
      ('api/user/login', authData) //heroku
      //(localhost + 'api/user/login', authData)
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
              email: email,
              role: role,
              orgName: response.orgName,
              uen: response.uen,
              beneficiaries: response.beneficiaries,
              verified: true,
            };

            this.authStatusListener.next(this.authStatus);
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
      email: null,
      role: null,
      orgName: null,
      uen: null,
      beneficiaries: null,
      verified: null,
    });

    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/']);


    //this.authStatus = null;

  }

  private setAuthTimer(duration: number) {
    console.log("Setting timer" + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(
    token: string,
    expirationDate: Date,
    response: {
      token: string;
      expiresIn: number;
      email: string;
      orgName: string;
      role: string;
      uen: string;
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

  private getAuthData() {
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
}
