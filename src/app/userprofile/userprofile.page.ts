import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {

  constructor() { }

  data: any = [];
  
  ngOnInit() {
   //this.data = JSON.parse(window.localStorage.getItem('signupForm'))
   this.data = 
    {
      firstName: 'Kapil',
      lastName: 'Reja',
      email: 'Kapil.reja@capita.com',
      phoneNumber: '9713486305'
      
    };
    window.localStorage.setItem("profileForm",JSON.stringify(this.data));

   console.log(this.data)
  }

}
