import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardImgComponent } from './components/card-img/card-img.component';
import { CustomPageComponent } from './components/custom-page/custom-page.component';
import { IonicModule } from '@ionic/angular';
import { HeaderPagesComponent } from './components/header-pages/header-pages.component';
import { SkeletonImgComponent } from './components/loaders/skeleton-img/skeleton-img.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ImgWithZoomComponent } from './components/img-with-zoom/img-with-zoom.component';

@NgModule({
  declarations: [
    CardImgComponent
    , CustomPageComponent
    , HeaderPagesComponent
    , SkeletonImgComponent
    , TabsComponent
    , ImgWithZoomComponent
  ],
  imports: [
    CommonModule
    , IonicModule
  ],
  exports: [
    CardImgComponent
    , CustomPageComponent
    , HeaderPagesComponent
    , SkeletonImgComponent
    , TabsComponent
    , ImgWithZoomComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
