import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeederCardComponent } from './feeder-card.component';

describe('FeederCardComponent', () => {
  let component: FeederCardComponent;
  let fixture: ComponentFixture<FeederCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeederCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeederCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
