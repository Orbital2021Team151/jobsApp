import { Component } from "@angular/core";
import { ErrorInterceptor } from "../../error-interceptor";

@Component({
  templateUrl: './user-banned-error.component.html'
})
export class UserBannedErrorComponent {
  message = 'Your account has been banned. Please contact our administrator for more details.';
}
