import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  all(){
    return this.http.get("https://restcountries.eu/rest/v2/all?fields=name;capital;population;region;flag;");
  }
}
