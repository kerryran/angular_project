import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathwayLayoutComponent } from './pathway-layout.component';

describe('PathwayLayoutComponent', () => {
  let component: PathwayLayoutComponent;
  let fixture: ComponentFixture<PathwayLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathwayLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathwayLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
