import { Component } from '@angular/core';

@Component({
  templateUrl: './login-general-error.component.html',
})

export class LoginGeneralErrorComponent {
  message = "Your Email, Password, or Role may be wrong, or your account could still be unverified. Please try again."
}
