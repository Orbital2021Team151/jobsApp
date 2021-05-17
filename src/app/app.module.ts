import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from "@angular/common";
import { MatExpansionModule } from '@angular/material/expansion';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
//If these causes issue in the future, revert to angular material version "^8.0.0" in package-json
//by doing npm install --save @angular/material@8 --save-exact

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PostCreateComponent } from './posts/posts-create/posts-create.component';
import { PostBoardComponent } from './posts/posts-board/posts-board.component';
import { AdminBoardComponent } from './admin/admin-board/admin-board.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthInterceptor } from './auth/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PostCreateComponent,
    PostBoardComponent,
    AdminBoardComponent,
    LoginComponent,
    SignupComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CardModule,
    ButtonModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
