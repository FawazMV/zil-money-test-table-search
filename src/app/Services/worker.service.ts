import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WorkerInterface } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class WorkerService {
  private baseurl =
    'https://zil-test.s3.us-east-1.amazonaws.com/json-data.json';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<WorkerInterface[]>(this.baseurl);
  }
}
