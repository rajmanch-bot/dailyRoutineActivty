import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  constructor(private router: Router){}

  todo = {}
  loginForm(){
    alert("hell");
   // console.log(this.todo);
    this.router.navigate(['/dashboard'])
   
  }
  
}
