import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ls: LoginService, private ts: TokenService, private router: Router) { }


  ngOnInit(): void {
    if (this.ts.getToken() !== null)
      this.router.navigate(['/dash']);
  }

  myForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  submit() {
    // console.log(this.myForm.value);
    // console.log(this.myForm.valid);

    if (this.myForm.valid)
      this.ls.signin(this.myForm.value.email, this.myForm.value.password).subscribe(data => {
        // console.log(data);
        // console.log(typeof data);
        // console.log(this.ts.checked)
        this.ts.saveToken(data);
        this.router.navigate(['/dash']);
      });
  }

  checkValid() {
    return this.myForm.valid;
  }

  toggleCheck(): void {
    this.ts.checked = !this.ts.checked;
    // console.log(this.ts.checked);
  }
}
