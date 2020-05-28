import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { JsonPipe, formatDate, CommonModule } from '@angular/common';



// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import {JSON} from 'jsonfile'
// import {NavController} from '@ionic/angular'
// import { NodeWithI18n } from '@angular/compiler';


@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.page.html',
  styleUrls: ['./scheduler.page.scss'],
})


export class SchedulerPage implements OnInit {
data: any;
data1: any;
currentDate;
public lastName;
officeTiming: any;


today: number = Date.now();
  constructor(private route: ActivatedRoute, private router: Router) {
    // this.currentDate =  formatDate
    // console.log(this.currentDate+"  ddd"+this.currentDate1)
   // this.translateService.use('en');

this.lastName =   window.localStorage.getItem('lastName');
this.data1 = JSON.parse( window.localStorage.getItem('signupForm'));
this.officeTiming = window.localStorage.getItem('officeTiming');

console.log('scheldldldl====' + this.data1.firstName);
this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.data = this.router.getCurrentNavigation().extras.state.signup;
        console.log(this.data.firstName);
      }
    });
  }


  ngOnInit() {
  }

}
