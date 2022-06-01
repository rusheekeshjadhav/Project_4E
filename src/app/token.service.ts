import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken(): string | null {
    return localStorage.getItem("token");
  }

  saveToken(token: any) {
    localStorage.setItem("token", token.response);
  }

  clearToken() {
    localStorage.clear();
  }
}
