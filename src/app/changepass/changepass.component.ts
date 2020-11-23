import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Userdetails } from '../models/models';
//import { Userdetails } from '../models/model';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {
  user: Userdetails = new Userdetails()
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  goBack(){

    this._router.navigate(["/forgetpassword"])
    
  }
}
