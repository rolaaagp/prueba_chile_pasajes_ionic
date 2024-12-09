import { Component, Input, OnInit } from '@angular/core';
import { TEXTS } from '../../texts/texts';

@Component({
  selector: 'app-img-with-zoom',
  templateUrl: './img-with-zoom.component.html',
  styleUrls: ['./img-with-zoom.component.scss'],
})
export class ImgWithZoomComponent implements OnInit {
  texts = TEXTS
  @Input() src!: string;
  @Input() alt: string = this.texts.NO_IMAGE;
  isZoomed: boolean = false;


  constructor() { }

  ngOnInit(): void {
    if (!this.src) {
      console.error('No se proporcionó una URL para la imagen.');
    }
  }

  /**
   * @description Toggles the zoom effect on an image. When the user clicks on the image, 
   * it calculates the coordinates of the click and sets the zoom to focus on that point
   * If the image is already zoomed, it resets to its original state
   *
   * @param event The mouse click event containing the coordinates of the click
   */
  toggleZoom(event: MouseEvent): void {

    const imgElement = event.target as HTMLImageElement;
    this.isZoomed = !this.isZoomed;

    if (this.isZoomed) {

      const rect = imgElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      imgElement.style.transformOrigin = `${x}px ${y}px`;
      imgElement.classList.add('zoomed');
    } else {

      imgElement.classList.remove('zoomed');
    }
  }
}
