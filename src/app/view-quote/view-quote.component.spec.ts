import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuoteComponent } from './view-quote.component';

describe('ViewQuoteComponent', () => {
  let component: ViewQuoteComponent;
  let fixture: ComponentFixture<ViewQuoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewQuoteComponent]
    });
    fixture = TestBed.createComponent(ViewQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
