import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { PieComponent } from './pie/pie.component';
import { AuthInterceptor, authInterceptorProviders } from './auth.interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateKPIComponent } from './create-kpi/create-kpi.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    PieComponent,
    NavbarComponent,
    CreateKPIComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [authInterceptorProviders, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
