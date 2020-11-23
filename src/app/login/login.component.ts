import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(private _router: Router) {

  }

  ngOnInit() {
  }


  loginUser(evt: any) {
    if ((this.username == "Bagi" && this.password == "bagi@123")
      || (this.username == "Srinu" && this.password == "srinu@123")
      || (this.username == "Arjun" && this.password == "arjun@123")) {
      console.log("Welcome");
      // this._router.navigate({"xyz"})
    }
    //else if (this.username == "Arjun" && this.password =="arjun@123"){

    //}
    else {
      console.log("Invalid Credentials")
    }
  }

  NewPassord(){
    this._router.navigate(["/forgetpassword"])
  }

}
