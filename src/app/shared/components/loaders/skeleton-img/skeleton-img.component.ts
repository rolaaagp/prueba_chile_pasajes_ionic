import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-img',
  templateUrl: './skeleton-img.component.html',
  styleUrls: ['./skeleton-img.component.scss'],
})
export class SkeletonImgComponent implements OnInit {
  @Input() loading!: boolean;
  @Input() repetitions!: number;
  skeletons: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.generateSkeletons();
  }

  ngOnChanges(): void {
    this.generateSkeletons();
  }


  private generateSkeletons(): void {
    this.skeletons = Array(this.repetitions).fill(0);
  }
}
