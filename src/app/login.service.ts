import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

const AUTH_API = "https://dev-api.tqmi.io/user-management/login";
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userList: User[] = [];

  constructor(private router: Router, private http: HttpClient) { }

  signin(email: string, password: string) {
    return this.http.post(AUTH_API, { "username":email, "password":password }, httpOptions);
  }


  // signin(email: string, password: string){
  //   let use: User | undefined = this.userList.find(elem => elem.email === email && elem.password === password);
  //   if(use === undefined){
  //     alert("Invalid Credentials !!!");
  //   }
  //   else{
  //     this.router.navigateByUrl("/dash");
  //   }
  // }
  

  signup(email: string, password: string, name: string, age: number) {
    // this.userList.includes(elem => elem.email === email);

    let use: User | undefined = this.userList.find(elem => elem.email === email);
    // console.log(use);

    if (use === undefined) {
      this.userList.push({
        email: email,
        password: password,
        name: name,
        age: age
      });
      // console.log("User added successfully");
      // console.log(this.userList);

      // this.router.navigateByUrl("/signin");
      this.router.navigate(["/signin"]);
    }
    else {
      // console.log("Invalid user");
      alert("User already present !!!");
    }
  }
}
