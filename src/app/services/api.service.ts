import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModelInterface } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  baseUrl = 'https://zil-test.s3.us-east-1.amazonaws.com/json-data.json';
  constructor(private _http: HttpClient) {}

  getUserData(): Observable<UserModelInterface[]> {
    return this._http.get<UserModelInterface[]>(this.baseUrl);
  }
}
