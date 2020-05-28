import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { CommonModule } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import localeEnGb from '@angular/common/locales/en-GB';
import { registerLocaleData } from '@angular/common';
import { LocalNotifications} from '@ionic-native/local-notifications/ngx';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'DashBoard',
      url: '/dashboard',
      icon: 'alarm'

    },
    {
      title: 'Scheduler',
      url: '/scheduler',
      icon: 'watch'
    },
    {
      title: 'Routine',
      url: '/routine',
      icon: 'hourglass'
    },
    {
      title: 'Sync',
      url: '/sync',
      icon: 'sync'
    },
    {
      title: 'Events',
      url: '/events',
      icon: 'medkit'
    },
    {
      title: 'Tags',
      url: '/tags',
      icon: 'pricetags'
    },
    {
      title: 'Trends',
      url: '/trends',
      icon: 'trending-up'
    }
  ];

  public tags = [{title: 'laudnry',
  value: 'Do the laundry'},{title: 'water',
  value: 'Have water'},{title: 'break',
  value: 'Breal for lunch'}];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private localNotifications: LocalNotifications
  ) {
    

    this.initializeApp();
    
   
  }

  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    console.log("app component ts global")
    registerLocaleData(localeIt, 'it-IT');
    registerLocaleData(localeEnGb, 'en-GB');

    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }

   // while(true){
var year = new Date().getFullYear();
var month = new Date().getMonth();
var day = new Date().getDate();

 

var time1 = new Date(year, month, day, 18, 13, 0, 0);
var time2 = new Date(year, month, day, 18, 15, 0, 0);

console.log(time1);
this.localNotifications.schedule({
    id: 1,
    title: 'My first notification',
    text: 'First notification test one',
    trigger: {firstAt: new Date(time1)}
   
   
  });

  this.localNotifications.schedule(
    {
      id: 2,
      title: 'My second notification',
      text: 'secpmd notification test one',
      trigger: {firstAt: new Date(time2)}
     
    });
    
    
  
  
  }
}
