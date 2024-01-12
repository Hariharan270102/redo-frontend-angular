import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteNewCustComponent } from './quote-new-cust.component';

describe('QuoteNewCustComponent', () => {
  let component: QuoteNewCustComponent;
  let fixture: ComponentFixture<QuoteNewCustComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteNewCustComponent]
    });
    fixture = TestBed.createComponent(QuoteNewCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
