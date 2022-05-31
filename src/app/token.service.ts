import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: any){
    localStorage.setItem("token",token.token);
  }

  clearToken(){
    localStorage.clear();
  }
}
