import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-country-home',
  templateUrl: './country-home.component.html',
  styleUrls: ['./country-home.component.css']
})
export class CountryHomeComponent implements OnInit {
  @ViewChild("options") options!: ElementRef;

  regions: string[] = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania"
  ];

  countryName: string = "";

  selectedRegion: string | null = null;

  initCountries: any = null;
  filteredCountries: any = this.initCountries;

  constructor(private requestService: RequestService, private filterService: FilterService) { }

  ngOnInit(): void {
    this.requestService.all()
      .subscribe((data) => {
        this.initCountries = data;
        this.filteredCountries = this.initCountries;
      });
  }
  
  checkRegion(region: string){
    this.selectedRegion = region;
    this.options.nativeElement.open = false;
    this.filter();
  }

  filter(){
    this.filteredCountries = this.filterService.filter(this.initCountries, this.selectedRegion, this.countryName);
  }

  removeRegion(){
    this.selectedRegion = null;
    this.filter();
  }
}
