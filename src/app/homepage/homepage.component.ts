import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  selectedCountry: string = '';
  constructor(private router: Router) {}

  onSubmit() {
    // You can access the selected value in the 'selectedCountry' variable
    console.log('Selected country:', this.selectedCountry);
    // Perform other actions with the selected value
  }
  goToCreateQuote() {
    this.router.navigate(['/create-quote']);
  }

  goToViewQuote() {
    this.router.navigate(['/view-quote']);
  }

}
