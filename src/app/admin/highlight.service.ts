import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { AuthData } from '../auth/auth-data.model';
import { Highlight } from './highlight.model';

import { environment } from "../../environments/environment";
const BACKEND_URL = environment.apiUrl; //change this in the environment folder

@Injectable({
  providedIn: 'root',
})
export class HighlightService {

}
