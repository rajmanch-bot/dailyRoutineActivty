import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FitbitPage } from './fitbit.page';

const routes: Routes = [
  {
    path: '',
    component: FitbitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FitbitPageRoutingModule {}
