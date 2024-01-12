import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { ViewQuoteComponent } from './view-quote/view-quote.component';
import { QuoteExistingCustComponent } from './quote-existing-cust/quote-existing-cust.component';
import { QuoteNewCustComponent } from './quote-new-cust/quote-new-cust.component';

const routes: Routes = [
  {path:'homepage',component:HomepageComponent},
  {path:'create-quote',component:CreateQuoteComponent},
  {path:'view-quote',component:ViewQuoteComponent},
  {path:'quote-existing-cust',component:QuoteExistingCustComponent},
  {path:'quote-new-cust',component:QuoteNewCustComponent},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
