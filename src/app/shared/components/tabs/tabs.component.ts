import { Component, OnInit } from '@angular/core';

interface OptionsTab {
  icon: string;
  link: string;
  label: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  options: OptionsTab[] = [
    {
      icon: "home-outline",
      link: "home",
      label: "Todos"
    },
    {
      icon: "shuffle-outline",
      link: "random",
      label: "Patito Aleatorio"
    }
  ]
  constructor() { }

  ngOnInit() { }

}
