import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

// const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
const DEPT_API = 'https://dev-api.tqmi.io/setting-management/api/departments';

@Injectable({
  providedIn: 'root'
})
export class KpiService {

  constructor(private http: HttpClient) { }

  getDept(): Observable<any> {
    return this.http.get(DEPT_API);
  }
}
