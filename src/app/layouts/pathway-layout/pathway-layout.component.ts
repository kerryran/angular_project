import { Component, OnInit } from '@angular/core';
import { info_model } from './content/info-hover-card/info-model';
import { InfoService } from './content/info-hover-card/info.service';

@Component({
  selector: 'app-pathway-layout',
  templateUrl: './pathway-layout.component.html',
  styleUrls: ['./pathway-layout.component.css']
})
export class PathwayLayoutComponent implements OnInit {
  info: info_model[] = [];

  constructor(private infoService: InfoService) {
  }

  ngOnInit(): void {
    this.infoService.getInfo().subscribe((data: info_model[]) => {
      for (var x of data) {
        console.log(x);
        this.info.push(x);
      }
    })
  }

}
