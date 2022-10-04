import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dummy01LayoutComponent } from './dummy01-layout.component';

describe('Dummy01LayoutComponent', () => {
  let component: Dummy01LayoutComponent;
  let fixture: ComponentFixture<Dummy01LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dummy01LayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dummy01LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
