import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  checked: boolean = false;

  isTokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  getToken(): string | null {
    // console.log(localStorage.getItem("token"));
    if (this.checked)
      return localStorage.getItem("token");
    else
      return sessionStorage.getItem("token");
  }

  decodeToken(): any {
    var token = this.getToken();
    if (token !== null)
      return jwt_decode(token);
  }

  saveToken(token: any) {
    if (this.checked)
      localStorage.setItem("token", token.response);
    else
      sessionStorage.setItem("token", token.response);
  }

  clearToken() {
    if (this.checked)
      localStorage.clear();
    else
      sessionStorage.clear();
    this.checked = false;
  }
}
