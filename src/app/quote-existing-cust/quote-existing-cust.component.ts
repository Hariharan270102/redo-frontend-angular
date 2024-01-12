import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quote-existing-cust',
  templateUrl: './quote-existing-cust.component.html',
  styleUrls: ['./quote-existing-cust.component.css']
})
export class QuoteExistingCustComponent {
  quoteForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private router:Router) {}
  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.quoteForm = this.fb.group({
      customerName: ['', Validators.required],
      quoteId: [{ value: this.generateQuoteId(), disabled: true }],
      quoteOwner: ['', Validators.required],
    });
  }
  generateQuoteId(): string {
    // Implement your logic to generate a 4-letter and 6-digit quoteId
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetters = Array.from({ length: 4 }, () => letters[Math.floor(Math.random() * letters.length)]);
    const randomDigits = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    return randomLetters.join('') + randomDigits;
  }
  

  onSubmit() {
    // Implement the logic to handle form submission
    // Access the form values using this.quoteForm.value
    // Use QuoteService to call the backend API to save the quote
    const quoteIdValue = this.quoteForm.get('quoteId')?.value;
    console.log('Quote ID:', quoteIdValue);

    console.log(this.quoteForm.value);
    console.log(this.quoteForm.value.customerName);
    
    
  }
}
