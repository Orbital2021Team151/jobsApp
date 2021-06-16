import { Component } from '@angular/core';

@Component({
  templateUrl: './login-wrong-password-error.component.html',
})

export class LoginWrongPasswordErrorComponent {
  message = "Wrong password! Please check if there are spaces in your password."
}
