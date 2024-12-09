import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-pages',
  templateUrl: './header-pages.component.html',
  styleUrls: ['./header-pages.component.scss'],
})
export class HeaderPagesComponent implements OnInit {
  @Input() title!: string;
  @Input() allowBack: boolean = true;
  @Input() ifRenderlogo: boolean = false;
  
  constructor() { }

  ngOnInit() { }

}
