import { Component } from "@angular/core";
import { ErrorInterceptor } from "../../error-interceptor";

@Component({
  templateUrl: './user-not-verified-error.component.html'
})
export class NotVerifiedErrorComponent {
  message = 'Your account is not verified yet. Please go to your email and click on the verification link!';
}
