import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CountryDataService {

  allCountries : any = {};

  constructor(private http: HttpClient) { }

  fetchCountryData(name: string){
    return this.http.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true&fields=name;nativeName;topLevelDomain;population;region;languages;subregion;capital;currencies;borders;flag;`);
  }

  fetchAllCountries(){
    return this.http.get(`https://restcountries.eu/rest/v2/all?fields=name;alpha3Code;`)
  }

  formatData(arr: any){
    arr.forEach((item: any) =>{
      this.allCountries[`${item.alpha3Code}`] = item.name.toLowerCase();
    });
  }

  handleAllCountryData(data: any){
    this.formatData(data);
  }

  countryExists(name: string){
    return Object.values(this.allCountries).includes(name.toLowerCase()); 
  }

  formatCountryData(countryData: any){
    return {
      ...countryData[0],
      languages: countryData[0].languages.map((item: any) => item.name).join(", "),
      currencies: countryData[0].currencies.map((item: any) => item.name).join(", "),
      borders: countryData[0].borders.map((item: any) => this.allCountries[item])
    }
  }
}
