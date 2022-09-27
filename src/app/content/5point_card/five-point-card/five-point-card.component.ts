import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-five-point-card',
  templateUrl: './five-point-card.component.html',
  styleUrls: ['./five-point-card.component.css']
})
export class FivePointCardComponent implements OnInit {

  @Input () img: string;
  @Input () title: string;
  @Input () text1: string;
  @Input () text2: string;
  @Input () text3: string;
  @Input () text4: string;
  @Input () text5: string;

  constructor() { 
    this.img = "";
    this.title = "";
    this.text1 = "";
    this.text2 = "";
    this.text3 = "";
    this.text4 = "";
    this.text5 = "";
  }

  ngOnInit(): void {
  }

}
