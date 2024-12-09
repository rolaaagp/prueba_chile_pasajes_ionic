import { Component, OnInit } from '@angular/core';
import { ImgRandomResponse } from 'src/app/interfaces';
import { ImageService } from 'src/app/services/image/image.service';
import { TEXTS } from 'src/app/shared/texts/texts';

@Component({
  selector: 'app-random-image',
  templateUrl: './random-image.page.html',
  styleUrls: ['./random-image.page.scss'],
})
export class RandomImagePage implements OnInit {

  image!: ImgRandomResponse;
  loading!: boolean;
  texts = TEXTS;

  constructor(private readonly imageService: ImageService) { }

  ngOnInit() {
    this.loadRandomImage();
  }

  loadRandomImage(): void {
    this.loading = true;
    this.imageService.getRandomImage().subscribe({
      next: (response: ImgRandomResponse) => {
        this.image = response;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error('Error al cargar random img:', err);
      }
    });
  }


}
