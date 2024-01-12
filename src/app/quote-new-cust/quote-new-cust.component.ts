// quote-new-cust.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-quote-new-cust',
  templateUrl: './quote-new-cust.component.html',
  styleUrls: ['./quote-new-cust.component.css'],
})
export class QuoteNewCustComponent {
  quoteNewCustForm!: FormGroup; // Using non-null assertion here
  addresses: FormControl[] = [new FormControl('')];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.quoteNewCustForm = this.fb.group({
      customerName: ['', Validators.required],
    });
  }

  addAddress() {
    this.addresses.push(new FormControl(''));
  }

  removeAddress(index: number) {
    this.addresses.splice(index, 1);
  }

  isSubmitDisabled(): boolean {
    return this.quoteNewCustForm!.get('customerName')!.invalid || this.addresses.some(address => address.invalid);
  }

  onSubmit() {
    // Implement the logic to handle form submission
    // Access the form values using this.quoteNewCustForm.value
    const customerName = this.quoteNewCustForm.value.customerName;
    const addresses = this.addresses.map(control => control.value);

    console.log('Customer Name:', customerName);
    console.log('Addresses:', addresses); 
    console.log(this.quoteNewCustForm!.value);
  }
}
