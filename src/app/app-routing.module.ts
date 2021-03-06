import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CreateKPIComponent } from './create-kpi/create-kpi.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsKpiComponent } from './details-kpi/details-kpi.component';
import { DisplayKpiComponent } from './display-kpi/display-kpi.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

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
  },
  {
    path: 'displaykpi',
    component: DisplayKpiComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'hierarchy',
    component: HierarchyComponent,
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
