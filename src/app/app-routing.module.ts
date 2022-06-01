import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { CreateKPIComponent } from './create-kpi/create-kpi.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'dash',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'createkpi',
    component: CreateKPIComponent,
    canActivate: [AuthGuard]
  }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
