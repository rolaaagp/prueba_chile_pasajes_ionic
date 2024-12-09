import { Component, OnInit } from '@angular/core';
import { TEXTS } from 'src/app/shared/texts/texts';

import { ImageService } from 'src/app/services/image/image.service';
import { Router } from '@angular/router';
import { ImgResponse } from 'src/app/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  images!: ImgResponse[];
  texts = TEXTS;

  constructor(private readonly imageService: ImageService, private router: Router) { }

  ngOnInit() {
    this.loadImages();
  }

  loadImages(): void {
    this.imageService.getAll().subscribe({
      next: (response: ImgResponse[]) => {
        this.images = response;
      },
      error: (err) => {
        console.error('Error al cargar imágenes:', err);
      }
    });
  }

  goToDetail(image: ImgResponse): void {
    this.router.navigate(
      [`detail/${image.name}`],
      {
        state:
        {
          data: image
        }
      }
    );
  }

}
