import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChangepassComponent } from './changepass/changepass.component';
import { ConfirmEqualValidatorDirective } from './shared/confirmEqualvalidator.directive';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChangepassComponent,
    ConfirmEqualValidatorDirective,
    ForgetpassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
