import { Component, OnInit } from '@angular/core';
import { info_card } from './info-mocklist';
import { info_model } from './info-model';

@Component({
  selector: 'app-info-hover-card',
  templateUrl: './info-hover-card.component.html',
  styleUrls: ['./info-hover-card.component.css']
})
export class InfoHoverCardComponent implements OnInit {
  info: info_model[] = [];

  constructor() {
    for(var item of info_card) {
      console.log(item);
      this.info.push(item);
    }
  }

  ngOnInit(): void {
  }

}
