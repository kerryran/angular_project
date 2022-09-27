import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { AboutComponent } from './content/about/about/about.component';
import { HackGapComponent } from './content/hack-gap/hack-gap/hack-gap.component';
import { WhoIsThisComponent } from './content/who/who-is-this/who-is-this.component';
import { ThreePointCardComponent } from './content/3point_card/three-point-card/three-point-card.component';
import { FivePointCardComponent } from './content/5point_card/five-point-card/five-point-card.component';
import { PdfCardComponent } from './content/pdf_card/pdf-card/pdf-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HackGapComponent,
    WhoIsThisComponent,
    ThreePointCardComponent,
    FivePointCardComponent,
    PdfCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
