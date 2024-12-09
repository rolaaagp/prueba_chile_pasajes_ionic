import { Component, Input, OnInit } from '@angular/core';
import { ImgResponse } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-img',
  templateUrl: './card-img.component.html',
  styleUrls: ['./card-img.component.scss'],
})
export class CardImgComponent  implements OnInit {

  @Input() imgAlt?: string;
  @Input() imgSrc!: string;
  @Input() event!: (image: ImgResponse) => void;
  @Input() image!: ImgResponse;

  @Input() title!: string;
  @Input() subtitle!: string;

  srcBrokenImage: string = environment.BROKEN_IMG;
  currentImgSrc: string = '';
  constructor() { }

  ngOnInit() {}

  ngOnChanges(): void {
    this.currentImgSrc = this.imgSrc || this.srcBrokenImage;
  }

  onImageError(): void {
    this.currentImgSrc = this.srcBrokenImage;
  }

  onCardClick(): void {
    if (this.event) {
      this.event(this.image);
    }
  }
}
