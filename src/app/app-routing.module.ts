import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeatmapLayoutComponent } from './layouts/heatmap-layout/heatmap-layout.component';
import { PathwayLayoutComponent } from './layouts/pathway-layout/pathway-layout.component';
import { TrainingLayoutComponent } from './layouts/training-layout/training-layout.component';
import { CertificationLayoutComponent } from './layouts/certification-layout/certification-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

const routes: Routes = [
  { path: '', component: HomeLayoutComponent },
  { path: 'index', component: HomeLayoutComponent },
  { path: 'heatmap', component: HeatmapLayoutComponent },
  { path: 'pathway', component: PathwayLayoutComponent },
  { path: 'training', component: TrainingLayoutComponent },
  { path: 'certifications', component: CertificationLayoutComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
