import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryDataService } from './services/country-data.service';
  
@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  name !: string;
  countryData !: any;

  constructor(private currentRoute: ActivatedRoute, private dataService: CountryDataService) { }

  ngOnInit(): void {
    this.getNameFromRoute();
  }
  
  getNameFromRoute(){
    this.currentRoute.params.subscribe((param)=>{
      this.name = param.name;
      this.countryData = null;
      this.initAndCheck();
    });
  }
  
  initAndCheck(){
    this.dataService.fetchAllCountries()
    .subscribe((data: any)=>{
      this.dataService.handleAllCountryData(data);
      if(this.dataService.countryExists(this.name)){
        this.fetchCountryData();
      }else{
        this.countryData = "Country not found";
      }
    });
  }

  fetchCountryData(){
    this.dataService.fetchCountryData(this.name)
      .subscribe((data)=>{
        this.countryData = this.dataService.formatCountryData(data);
      })
  }

  checkCountryExists(){
    this.dataService.countryExists(this.name);
  }
}
