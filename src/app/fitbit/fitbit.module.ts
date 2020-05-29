import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FitbitPageRoutingModule } from './fitbit-routing.module';

import { FitbitPage } from './fitbit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FitbitPageRoutingModule
  ],
  declarations: [FitbitPage]
})
export class FitbitPageModule {}
