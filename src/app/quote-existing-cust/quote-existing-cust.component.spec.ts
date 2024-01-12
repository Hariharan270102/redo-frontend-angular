import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteExistingCustComponent } from './quote-existing-cust.component';

describe('QuoteExistingCustComponent', () => {
  let component: QuoteExistingCustComponent;
  let fixture: ComponentFixture<QuoteExistingCustComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteExistingCustComponent]
    });
    fixture = TestBed.createComponent(QuoteExistingCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
