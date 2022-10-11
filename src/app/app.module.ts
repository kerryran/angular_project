import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { AboutComponent } from './content/about/about/about.component';
import { HackGapComponent } from './content/hack-gap/hack-gap/hack-gap.component';
import { WhoIsThisComponent } from './content/who/who-is-this/who-is-this.component';
import { ThreePointCardComponent } from './content/3point_card/three-point-card/three-point-card.component';
import { PdfCardComponent } from './content/pdf_card/pdf-card/pdf-card.component';
import { AppRoutingModule } from './app-routing.module';
import { HeatmapLayoutComponent } from './layouts/heatmap-layout/heatmap-layout.component';
import { PathwayLayoutComponent } from './layouts/pathway-layout/pathway-layout.component';
import { TrainingLayoutComponent } from './layouts/training-layout/training-layout.component';
import { CertificationLayoutComponent } from './layouts/certification-layout/certification-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout/home-layout.component';
import { SecondHeaderComponent } from './navigation/header/second-header/second-header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HackGapComponent,
    WhoIsThisComponent,
    ThreePointCardComponent,
    PdfCardComponent,
    HeatmapLayoutComponent,
    PathwayLayoutComponent,
    TrainingLayoutComponent,
    CertificationLayoutComponent,
    HomeLayoutComponent,
    SecondHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
