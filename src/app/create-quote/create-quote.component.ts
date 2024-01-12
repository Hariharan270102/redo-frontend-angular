import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent {

  constructor(private fb: FormBuilder,
    private router:Router) {}
  
  forExistingCustomer(){
    this.router.navigate(['/quote-existing-cust']);
  }
  forNewCustomer(){
    this.router.navigate(['/quote-new-cust']);
  }
 
}
