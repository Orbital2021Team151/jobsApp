import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Subject, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ForgetPasswordErrorComponent } from "./errors/forget-password-error/forget-password-error.component";
import { LoginGeneralErrorComponent } from "./errors/login-general-error/login-general-error.component";
import { LoginWrongPasswordErrorComponent } from "./errors/login-wrong-password-error/login-wrong-password-error.component";
import { UpdatePasswordErrorComponent } from "./errors/update-password-error/update-password-error.component";

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

  //public errorListener = new Subject<any>();

  constructor(private dialog: MatDialog) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {

        let errorMessage = "Check your email to verify your account!";
        if (error.error.errorCode === 1) {
          errorMessage = "Check whether you are entering the correct user role or correct email address.";
          //this.errorListener.next(error.error.errorMessage);
          this.dialog.open(ForgetPasswordErrorComponent, {data: {message: errorMessage}});
          //new ErrorComponent(this);
        } else if (error.error.errorCode === 2) {
          this.dialog.open(LoginWrongPasswordErrorComponent);
        } else if (error.error.errorCode == 3) {
          this.dialog.open(LoginGeneralErrorComponent);
        } else if (error.error.errorCode == 4) {
          this.dialog.open(UpdatePasswordErrorComponent);
        } else if (error.error.errorCode == 5) {

        }

        return throwError(error);
      })
    );
  }

  // public getErrorListener() {
  //   return this.errorListener.asObservable();
  // }
}
