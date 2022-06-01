import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

const CREATE_API = 'https://dev-api.tqmi.io/org-goal-management/api/goal';
const DEPARTMENT_API = 'https://dev-api.tqmi.io/setting-management/api/departments';
const PERSPECTIVE_API = 'https://dev-api.tqmi.io/setting-management/api/perspectives';
const DATA_CAPTURE_FREQUENCY_API = 'https://dev-api.tqmi.io/setting-management/api/data-capture-frequency';
const REVIEW_FREQUENCY = 'https://dev-api.tqmi.io/setting-management/api/data-review-frequency';

@Injectable({
  providedIn: 'root'
})
export class KpiService {

  constructor(private http: HttpClient) { }

  getDepartment(): Observable<any> {
    return this.http.get(DEPARTMENT_API);
  }

  getPerspective(): Observable<any> {
    return this.http.get(PERSPECTIVE_API);
  }

  getDataCaptureFrequency(): Observable<any> {
    return this.http.get(DATA_CAPTURE_FREQUENCY_API);
  }

  getReviewFrequency(): Observable<any> {
    return this.http.get(REVIEW_FREQUENCY);
  }

  createKPI(kpiForm: any): Observable<any>{
    return this.http.post(CREATE_API, kpiForm, httpOptions);
  }
}
