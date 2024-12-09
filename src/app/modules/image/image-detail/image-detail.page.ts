import { Component, OnInit } from '@angular/core';
import { ImgResponse } from 'src/app/interfaces';
import { TEXTS } from 'src/app/shared/texts/texts';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.page.html',
  styleUrls: ['./image-detail.page.scss'],
})
export class ImageDetailPage implements OnInit {

  image: ImgResponse;
  texts = TEXTS;


  constructor() { this.image = history.state.data }

  ngOnInit() {

  }

}
