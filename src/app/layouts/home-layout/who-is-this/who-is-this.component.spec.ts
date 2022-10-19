import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIsThisComponent } from './who-is-this.component';

describe('WhoIsThisComponent', () => {
  let component: WhoIsThisComponent;
  let fixture: ComponentFixture<WhoIsThisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhoIsThisComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WhoIsThisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
