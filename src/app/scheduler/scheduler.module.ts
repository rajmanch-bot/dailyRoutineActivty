import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulerPageRoutingModule } from './scheduler-routing.module';

import { SchedulerPage } from './scheduler.page';
//import { BrowserModule } from '@angular/platform-browser';
//import {JSON} from 'jsonfile'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulerPageRoutingModule,
   
    //BrowserModule,
    //JSON
  ],
  declarations: [SchedulerPage]
})
export class SchedulerPageModule {}
