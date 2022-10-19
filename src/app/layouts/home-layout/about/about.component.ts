import { Component, OnInit } from '@angular/core';
import { about_model } from './about_model';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: about_model[] = [];

  constructor(private aboutService: AboutService) {

  }

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe((data: about_model[]) => {
      for (var x of data) {
        console.log(x);
        this.about.push(x);
      }
    })
  }

}
