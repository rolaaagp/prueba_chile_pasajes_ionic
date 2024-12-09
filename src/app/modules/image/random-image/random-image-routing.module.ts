import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomImagePage } from './random-image.page';

const routes: Routes = [
  {
    path: '',
    component: RandomImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomImagePageRoutingModule {}
