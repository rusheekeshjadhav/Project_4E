import { Injectable } from '@angular/core';

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

  saveToken(token: any) {
    localStorage.setItem("token", token.response);
  }

  clearToken() {
    localStorage.clear();
  }
}
