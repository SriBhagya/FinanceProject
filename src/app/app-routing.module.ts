import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangepassComponent } from './changepass/changepass.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: "",redirectTo: "login",pathMatch:"full"},
  {path: "login",component: LoginComponent},
  {path: "forgetpassword",component: ForgetpassComponent},
  {path:"changepass", component: ChangepassComponent}
 // {path: "register",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
