import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';

//import { BrowserModule } from '@angular/platform-browser';
//import {JSON} from 'jsonfile'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
  
   // BrowserModule,
    //JSON
  ],
  declarations: [SignupPage]
})
export class SignupPageModule {}
