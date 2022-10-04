import { Component, OnInit } from '@angular/core';
import { about_model } from './model_about';
import { about_card } from './mock_list_about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: about_model[] = [];

  constructor() {
    for(var item of about_card) {
      console.log(item);
      this.about.push(item);
    }
  }

  ngOnInit(): void {
  }

}
