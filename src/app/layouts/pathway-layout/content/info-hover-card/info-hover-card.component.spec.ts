import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHoverCardComponent } from './info-hover-card.component';

describe('InfoHoverCardComponent', () => {
  let component: InfoHoverCardComponent;
  let fixture: ComponentFixture<InfoHoverCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoHoverCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoHoverCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
