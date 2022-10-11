import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationLayoutComponent } from './certification-layout.component';

describe('CertificationLayoutComponent', () => {
  let component: CertificationLayoutComponent;
  let fixture: ComponentFixture<CertificationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
