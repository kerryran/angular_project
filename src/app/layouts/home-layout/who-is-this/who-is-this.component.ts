import { Component, OnInit } from '@angular/core';
import { pt_card_model } from './3pt-card-model';
import { PtCardService } from './pt_card.service';

@Component({
  selector: 'app-who-is-this',
  templateUrl: './who-is-this.component.html',
  styleUrls: ['./who-is-this.component.css']
})
export class WhoIsThisComponent implements OnInit {
  pt_card: pt_card_model[] = [];

  constructor(private ptCardService: PtCardService) {

  }

  ngOnInit(): void {
    this.ptCardService.getPtCard().subscribe((data: pt_card_model[]) => {
      for (var x of data) {
        console.log(x);
        this.pt_card.push(x);
      }
    })
  }

}
