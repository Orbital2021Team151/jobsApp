import { Component } from '@angular/core';

@Component({
  templateUrl: './signup-before-error.component.html',
})

export class SignupBeforeErrorComponent {
  message = "You used this email to sign up before! Try resetting your password.";
}
