import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './shared/components/tabs/tabs.component';

const routes: Routes = [
  {
    path: "",
    component: TabsComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'detail/:name',
        loadChildren: () => import('./modules/image/image-detail/image-detail.module').then(m => m.ImageDetailPageModule)
      },
      {
        path: 'random',
        loadChildren: () => import('./modules/image/random-image/random-image.module').then( m => m.RandomImagePageModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
