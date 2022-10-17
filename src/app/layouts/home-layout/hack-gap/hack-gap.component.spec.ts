import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackGapComponent } from './hack-gap.component';

describe('HackGapComponent', () => {
  let component: HackGapComponent;
  let fixture: ComponentFixture<HackGapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackGapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HackGapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
