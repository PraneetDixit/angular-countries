import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
  
@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  name !: any;
  constructor(private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentRoute.params.subscribe((param)=>{
      this.name = param.name;
    })
  }

}
