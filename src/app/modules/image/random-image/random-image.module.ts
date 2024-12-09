import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RandomImagePageRoutingModule } from './random-image-routing.module';

import { RandomImagePage } from './random-image.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomImagePageRoutingModule,
    SharedModule
  ],
  declarations: [RandomImagePage]
})
export class RandomImagePageModule { }
