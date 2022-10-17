import { Component, OnInit } from '@angular/core';
import { info_card } from './content/info-hover-card/info-mocklist';
import { info_model } from './content/info-hover-card/info-model';

@Component({
  selector: 'app-pathway-layout',
  templateUrl: './pathway-layout.component.html',
  styleUrls: ['./pathway-layout.component.css']
})
export class PathwayLayoutComponent implements OnInit {
  info: info_model[] = [];

  constructor() {
    for (var item of info_card) {
      console.log(item);
      this.info.push(item);
    }
  }
  ngOnInit(): void {
  }

}
