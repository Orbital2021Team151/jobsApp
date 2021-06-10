import { Component } from "@angular/core";
import { ErrorInterceptor } from "../../error-interceptor";

@Component({
  templateUrl: './forget-password-error.component.html'
})
export class ForgetPasswordErrorComponent {
  message = 'You may have selected the wrong role, or entered the wrong email';
}
