import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapLayoutComponent } from './heatmap-layout.component';

describe('HeatmapLayoutComponent', () => {
  let component: HeatmapLayoutComponent;
  let fixture: ComponentFixture<HeatmapLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatmapLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatmapLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
