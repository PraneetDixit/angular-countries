import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { AttributionComponent } from './attribution/attribution.component';
import { CountryHomeComponent } from './country-home/country-home.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { PaginationBarComponent } from './pagination-bar/pagination-bar.component';
import { BreakPipe } from './pipes/break.pipe';
import { FilterBarComponent } from './filter-bar/filter-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    AttributionComponent,
    CountryHomeComponent,
    CardComponent,
    PaginationBarComponent,
    BreakPipe,
    FilterBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
