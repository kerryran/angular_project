import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingLayoutComponent } from './training-layout.component';

describe('TrainingLayoutComponent', () => {
  let component: TrainingLayoutComponent;
  let fixture: ComponentFixture<TrainingLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
