import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

// const CREATE_API = environment.URL + '/org-goal-management/api/goal';
// const LIST = environment.URL + '/org-goal-management/api/goal/get-kpi-list-given-date-range?start=1648751400000&end=1680287399000&includeViewOnly=true';
const DEPARTMENT_API = environment.URL + '/setting-management/api/departments';
const PERSPECTIVE_API = environment.URL + '/setting-management/api/perspectives';
const DATA_CAPTURE_FREQUENCY_API = environment.URL + '/setting-management/api/data-capture-frequency';
const REVIEW_FREQUENCY = environment.URL + '/setting-management/api/data-review-frequency';
const KPI_TYPE = environment.URL + '/setting-management/api/kpi-types';
const CATEGORY = environment.URL + '/setting-management/api/kpi-categories';
const YEAR = environment.URL + '/setting-management/api/financial-years-list';

const HIERARCHY = environment.URL + '/org-goal-management/api/kpi/hierarchical-users-kpi-status';

const LIST = 'https://localhost:44368/api/KPI';
const CREATE_API = 'https://localhost:44368/api/KPI';

@Injectable({
  providedIn: 'root'
})
export class KpiService {

  constructor(private http: HttpClient, private ts: TokenService) { }

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

  getKpiType(): Observable<any> {
    return this.http.get(KPI_TYPE);
  }

  getCategory(): Observable<any> {
    return this.http.get(CATEGORY);
  }

  getYear(): Observable<any> {
    return this.http.get(YEAR);
  }

  createKPI(kpiForm: any): Observable<any> {
    console.log(kpiForm);
    // console.log("in create post");
    return this.http.post(CREATE_API, kpiForm, httpOptions);
  }

  listKPI(): Observable<any> {
    return this.http.get(LIST);
  }

  getHierarchy(): Observable<any> {
    let queryParams = new HttpParams();

    queryParams = queryParams.append('employeeid', this.ts.decodeToken().employeeId);
    queryParams = queryParams.append('fyStartDate', '1648751400000');
    queryParams = queryParams.append('fyEndDate', '1680287399000');
    queryParams = queryParams.append('groupby', 'kpi');
    queryParams = queryParams.append('kpiType', '606573e173d7e41e2e59a4b1,606573e173d7e41e2e59a4b0,61ab4d8127d6319a5950235d,61ab4da827d6319a5950235e');
    queryParams = queryParams.append('aggregate', 'false');

    return this.http.get(HIERARCHY, { params: queryParams });
  }
}
