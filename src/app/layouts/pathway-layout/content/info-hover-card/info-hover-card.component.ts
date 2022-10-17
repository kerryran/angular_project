import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-info-hover-card',
  templateUrl: './info-hover-card.component.html',
  styleUrls: ['./info-hover-card.component.css']
})
export class InfoHoverCardComponent implements OnInit {
  @Input() job: string;
  @Input() open: string;
  @Input() money: string;

  constructor() {
    this.job = "";
    this.open = "";
    this.money = "";
  }
  ngOnInit(): void {
  }

}
