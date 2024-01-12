import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { ViewQuoteComponent } from './view-quote/view-quote.component';
import { QuoteExistingCustComponent } from './quote-existing-cust/quote-existing-cust.component';
import { QuoteNewCustComponent } from './quote-new-cust/quote-new-cust.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    CreateQuoteComponent,
    ViewQuoteComponent,
    QuoteExistingCustComponent,
    QuoteNewCustComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
