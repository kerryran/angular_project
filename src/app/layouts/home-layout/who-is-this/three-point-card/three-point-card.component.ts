import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-point-card',
  templateUrl: './three-point-card.component.html',
  styleUrls: ['./pt-card.component.css']
})
export class ThreePointCardComponent implements OnInit {

  @Input() img: string;
  @Input() title: string;
  @Input() text_items: string[];

  constructor() {
    this.img = "";
    this.title = "";
    this.text_items = [];
  }

  ngOnInit(): void {
  }

}
