import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnerComponent } from './donner.component';

describe('DonnerComponent', () => {
  let component: DonnerComponent;
  let fixture: ComponentFixture<DonnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonnerComponent]
    });
    fixture = TestBed.createComponent(DonnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
