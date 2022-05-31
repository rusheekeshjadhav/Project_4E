import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private ls: LoginService) { }

  myForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    name: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required /* , Validators.pattern('[0-9]*') */])
  });

  submit() {
    if (this.myForm.valid)
      this.ls.signup(this.myForm.value.email, this.myForm.value.password, this.myForm.value.name, this.myForm.value.age);
  }

  checkValid() {
    return this.myForm.valid;
  }

  checkRequiredEmail(): boolean {
    if (this.myForm.controls['email'].errors)
      return this.myForm.controls['email'].errors['required'];
    else return false;
  }

  checkRequiredPassword(): boolean {
    if (this.myForm.controls['password'].errors)
      return this.myForm.controls['password'].errors['required'];
    else return false;
  }

  checkPatternEmail(): boolean {
    if (this.myForm.controls['email'].errors && this.myForm.controls['email'].errors['email'])
      return true;
    else return false;
  }

  checkLengthPassword(): boolean {
    // console.log(this.myForm.controls['password'].errors);

    if (this.myForm.controls['password'].errors && (this.myForm.controls['password'].errors['minlength'] || this.myForm.controls['password'].errors['maxlength'])) {
      // console.log(this.myForm.controls['password'].errors['required']);
      // console.log(this.myForm.controls['password'].errors['minlength']);
      return true;
    }
    else return false;
  }
}
