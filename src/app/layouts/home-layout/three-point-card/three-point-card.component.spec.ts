import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreePointCardComponent } from './three-point-card.component';

describe('ThreePointCardComponent', () => {
  let component: ThreePointCardComponent;
  let fixture: ComponentFixture<ThreePointCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreePointCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreePointCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
