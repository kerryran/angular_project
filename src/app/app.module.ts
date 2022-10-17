import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { AboutComponent } from './layouts/home-layout/about/about.component';
import { HackGapComponent } from './layouts/home-layout/hack-gap/hack-gap.component';
import { WhoIsThisComponent } from './layouts/home-layout/who-is-this/who-is-this.component';
import { ThreePointCardComponent } from './layouts/home-layout/three-point-card/three-point-card.component';
import { PdfCardComponent } from './layouts/home-layout/pdf-card/pdf-card.component';
import { AppRoutingModule } from './app-routing.module';
import { HeatmapLayoutComponent } from './layouts/heatmap-layout/heatmap-layout.component';
import { PathwayLayoutComponent } from './layouts/pathway-layout/pathway-layout.component';
import { TrainingLayoutComponent } from './layouts/training-layout/training-layout.component';
import { CertificationLayoutComponent } from './layouts/certification-layout/certification-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { SecondHeaderComponent } from './navigation/second-header/second-header.component';
import { CertCardComponent } from './layouts/certification-layout/line-cards/cert-card/cert-card.component';
import { JobCardComponent } from './layouts/certification-layout/line-cards/job-card/job-card.component';
import { SkillCardComponent } from './layouts/certification-layout/line-cards/skill-card/skill-card.component';
import { FeederCardComponent } from './layouts/pathway-layout/content/feeder-card/feeder-card.component';
import { CareerCardComponent } from './layouts/pathway-layout/content/career-card/career-card.component';
import { SideCardComponent } from './layouts/pathway-layout/content/side-card/side-card.component';
import { PathwayCardComponent } from './layouts/pathway-layout/content/pathway-card/pathway-card.component';
import { MethodologyCardComponent } from './layouts/home-layout/methodology-card/methodology-card.component';
import { LinkCardComponent } from './layouts/home-layout/link-card/link-card.component';
import { PartnerCardComponent } from './layouts/home-layout/partner-card/partner-card.component';
import { ImageCardComponent } from './layouts/home-layout/image-card/image-card.component';
import { InfoHoverCardComponent } from './layouts/pathway-layout/content/info-hover-card/info-hover-card.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './lab6/user-info.component';


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
    SecondHeaderComponent,
    CertCardComponent,
    JobCardComponent,
    SkillCardComponent,
    FeederCardComponent,
    CareerCardComponent,
    SideCardComponent,
    PathwayCardComponent,
    MethodologyCardComponent,
    LinkCardComponent,
    PartnerCardComponent,
    ImageCardComponent,
    InfoHoverCardComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
