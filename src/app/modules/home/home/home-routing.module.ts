import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ImageDetailPage } from '../../image/image-detail/image-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'detail/',
    component: ImageDetailPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
