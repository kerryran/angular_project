import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivePointCardComponent } from './five-point-card.component';

describe('FivePointCardComponent', () => {
  let component: FivePointCardComponent;
  let fixture: ComponentFixture<FivePointCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FivePointCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FivePointCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
