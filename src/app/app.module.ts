import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { PieComponent } from './pie/pie.component';
import { AuthInterceptor, authInterceptorProviders } from './auth.interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateKPIComponent } from './create-kpi/create-kpi.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DetailsKpiComponent } from './details-kpi/details-kpi.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ListKpiComponent } from './list-kpi/list-kpi.component';
import { DisplayKpiComponent } from './display-kpi/display-kpi.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    PieComponent,
    NavbarComponent,
    CreateKPIComponent,
    DetailsKpiComponent,
    ListKpiComponent,
    DisplayKpiComponent,
    HierarchyComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    NgSelectModule
  ],
  providers: [authInterceptorProviders, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
