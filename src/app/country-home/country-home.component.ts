import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs'

import { RequestService } from '../services/request.service';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-country-home',
  templateUrl: './country-home.component.html',
  styleUrls: ['./country-home.component.css']
})
export class CountryHomeComponent implements OnInit {

  initCountries: any = null;
  filteredCountries!: any;
  pages!: number;
  pageNumber: number = 0;
  // loaded : boolean = false;
  errorMsg: string = "";

  constructor(private requestService: RequestService, private filterService: FilterService) {}

  ngOnInit(): void {
    this.requestService.all()
      .pipe(
        catchError(error => {
          this.errorMsg = `${error.status} (${error.statusText})`;
          return of(null);
        })
      )
      .subscribe((data) => {
        this.initCountries = data;
        this.filteredCountries = this.initCountries;
        this.pages = this.getNumberOfPages();
      });
  }
  
  filter(data: any[]){
    this.filteredCountries = this.filterService.filter(this.initCountries, data[0], data[1]);
    this.pages = this.getNumberOfPages();
    this.pageNumber = 0;
  }

  getNumberOfPages(): number{
    return Math.ceil(this.filteredCountries.length / 12);
  }

  scrollToTop(){
    window.scrollTo(0, 0);
  }
}