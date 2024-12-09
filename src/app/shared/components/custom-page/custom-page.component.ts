import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styleUrls: ['./custom-page.component.scss'],
})
export class CustomPageComponent  implements OnInit {
  @Input() title!: string; 
  @Input() headerChildren?: any;
  @Input() allowBack: boolean = false;
  @Input() ifRenderlogo: boolean = false;
  
  constructor() { }

  ngOnInit() {}

}
