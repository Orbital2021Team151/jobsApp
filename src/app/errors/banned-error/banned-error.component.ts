import { Component } from "@angular/core";
import { ErrorInterceptor } from "../../error-interceptor";

@Component({
  templateUrl: './banned-error.component.html'
})
export class BannedErrorComponent {
  message = 'Please drop and email to the administrators if you think that the ban was not justified: <insert admin email here>';
}
