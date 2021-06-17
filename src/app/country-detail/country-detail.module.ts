import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryDetailRoutingModule } from './country-detail-routing.module';
import { CountryDetailComponent } from './country-detail.component';
import { CountryDataService } from './services/country-data.service'

@NgModule({
  declarations: [
    CountryDetailComponent
  ],
  imports: [
    CommonModule,
    CountryDetailRoutingModule
  ],
  providers: [
    CountryDataService
  ]
})
export class CountryDetailModule { }
