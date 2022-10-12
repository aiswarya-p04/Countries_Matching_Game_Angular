import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountryCapitalComponent } from './country-capital/country-capital.component';
import { CapitalService } from './capital.service';
import { NewCountryComponent } from './new-country/new-country.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryCapitalComponent,
    NewCountryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
