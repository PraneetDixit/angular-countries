import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeRequestService {

  constructor(private http: HttpClient) { }

  all(){
    return this.http.get("https://restcountries.com/v2/all?fields=name,capital,population,region,flag");
  }
}
