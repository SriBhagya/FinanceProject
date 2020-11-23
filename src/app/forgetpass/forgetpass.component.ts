import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent {
  forgetPasswordForm: FormGroup = new FormGroup({});
  otp: any = null;
  constructor(private fb: FormBuilder, private _router: Router) {
    this.forgetPasswordForm = fb.group({
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.minLength(10), Validators.maxLength(10)]],
      // enterOtp:""
    });
  }

  get f() {
    return this.forgetPasswordForm.controls;
  }

  getOtp() {
    console.log(this.forgetPasswordForm.value);
  }

  verifyOtp() {
    console.log(this.otp);
    this._router.navigate(["/changepass"])
  }

  forgetPass() {
    this.fb.control(["/forgetpassword"])
  }

  goBack() {

    this._router.navigate(["/login"])
  }

}
