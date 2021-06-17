import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { CardComponent } from './components/card/card.component';
import { PaginationBarComponent } from './components/pagination-bar/pagination-bar.component';
import { BreakPipe } from './pipes/break.pipe';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { FilterService } from './services/filter.service';
import { HomeRequestService } from './services/home-request.service'

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    PaginationBarComponent,
    BreakPipe,
    FilterBarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  providers: [
    FilterService,
    HomeRequestService
  ]
})
export class HomeModule { }
