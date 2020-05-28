import { NgModule, LOCALE_ID, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JsonPipe, formatDate, CommonModule} from '@angular/common';
import {FileSaver, Blob} from 'angular-file-saver';
// import { FormsModule } from '@angular/forms'
// import { ReactiveFormsModule} from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import {HttpClientModule} from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {JSON} from 'jsonfile'
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { LocalNotifications} from '@ionic-native/local-notifications/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { Chart } from 'chart.js';
registerLocaleData(es);


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    // ReactiveFormsModule,
    // FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    
   // HttpClientModule,
   // HttpClient,
   // JSON

  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    NativeStorage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'en' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule{}
