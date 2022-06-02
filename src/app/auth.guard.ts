import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private ts: TokenService, private router: Router) { }

  canActivate(): boolean {
    const token = this.ts.getToken();
    if (token && !this.ts.isTokenExpired(token)) {
      return true;
    }
    this.router.navigate(['/signin']);
    return false;
  }
}
