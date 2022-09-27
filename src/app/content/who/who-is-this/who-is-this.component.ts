import { Component, OnInit } from '@angular/core';
import { who_this_card } from './mock_list';
import { who_this_model } from './model';

@Component({
  selector: 'app-who-is-this',
  templateUrl: './who-is-this.component.html',
  styleUrls: ['./who-is-this.component.css']
})
export class WhoIsThisComponent implements OnInit {
  who_thiss: who_this_model[] = [];

  constructor() {
    for(var who_this of who_this_card) {
      console.log(who_this);
      this.who_thiss.push(who_this);
    }
  }
  
  ngOnInit(): void {
  }

}
