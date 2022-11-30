import { Component, OnInit } from '@angular/core';
import { AboutService } from '../layouts/home-layout/about/about.service';
import { about_model } from '../layouts/home-layout/about/about_model';

@Component({
  selector: 'app-add-text',
  templateUrl: './add-text.component.html',
  styleUrls: ['./add-text.component.css']
})
export class AddTextComponent implements OnInit {

  constructor(private as: AboutService) { }

  ngOnInit(): void {
  }

  addAbout(description: about_model) {
    console.log("You clicked add text");
    console.log(description);
    this.as.addAbout(description);
  }

}
