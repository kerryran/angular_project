import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-point-card',
  templateUrl: './three-point-card.component.html',
  styleUrls: ['./three-point-card.component.css']
})
export class ThreePointCardComponent implements OnInit {

  @Input () img: string;
  @Input () title: string;
  @Input () text1: string;
  @Input () text2: string;
  @Input () text3: string;

  
  constructor() { 
    this.img = "";
    this.title = "";
    this.text1 = "";
    this.text2 = "";
    this.text3 = "";
  }

  ngOnInit(): void {
  }

}
