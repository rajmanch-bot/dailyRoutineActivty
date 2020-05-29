import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { AngularDelegate, AlertController } from '@ionic/angular';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import * as data from './users.json';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import {JSON} from 'jsonfile'
// import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

// import {FileSaver,NgModule,Blob} from 'angular-file-saver'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {


  // private signup : FormGroup;




  constructor(private router: Router ){


  }

   

  /*saveFile() {
    const headers = new HttpHeaders();
    headers.append('Accept', 'text/plain');
    this.http.get('/api/files', { headers: headers })
      .toPromise()
      .then(response => this.saveToFileSystem(response));
  }

  private saveToFileSystem(response) {
    const contentDispositionHeader: string = response.headers.get('Content-Disposition');
    const parts: string[] = contentDispositionHeader.split(';');
    const filename = parts[1].split('=')[1];
    const blob = new Blob([response._body], { type: 'text/plain' });
    saveAs(blob, filename);
  }*/

  signup = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    shiftStart: '',
shiftEnd: ''
  };


  signupForm(){


  

  window.localStorage.setItem('signupForm', JSON.stringify(this.signup));
  window.localStorage.setItem('firstName', this.signup.firstName);
  window.localStorage.setItem('lastName', this.signup.lastName);
  window.localStorage.setItem('officeTiming', this.signup.shiftStart);
  this.router.navigate(['/login']);

  }



}
