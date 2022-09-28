import { Component, OnInit } from '@angular/core';
import { who_this_card } from './mock_list_master';
import { who_this_model } from './model_master';

@Component({
  selector: 'app-who-is-this',
  templateUrl: './who-is-this.component.html',
  styleUrls: ['./who-is-this.component.css']
})
export class WhoIsThisComponent implements OnInit {
  who_thises: who_this_model[] = [];

  constructor() {
    for(var who_this of who_this_card) {
      console.log(who_this);
      this.who_thises.push(who_this);
    }
  }
  
  ngOnInit(): void {
  }

}
