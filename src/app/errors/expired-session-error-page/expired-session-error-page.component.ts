import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    styleUrls: ['./expired-session-error-page.component.css'],
    templateUrl: './expired-session-error-page.component.html',
})
export class ExpiredSessionPage {

    constructor(public router: Router) {}

    goBackToLogin() {
        this.router.navigate(['/login']);
    }


}