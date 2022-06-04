import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  isTokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  getToken(): string | null {
    // console.log(localStorage.getItem("token"));
    return localStorage.getItem("token");
  }

  decodeToken(): any {
    var token = this.getToken();
    if (token !== null)
      return jwt_decode(token);
  }

  saveToken(token: any) {
    localStorage.setItem("token", token.response);
  }

  clearToken() {
    localStorage.clear();
  }
}
