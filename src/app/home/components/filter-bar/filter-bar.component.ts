import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent {
  @ViewChild("options") options!: ElementRef;
  @Output() filterChanged: EventEmitter<any> = new EventEmitter<any>();
  
  regions: string[] = ["Africa","Americas","Asia","Europe","Oceania"];
  selectedRegion: string | null = null;
  countryName: string = "";

  checkRegion(region: string){
    this.selectedRegion = region;
    this.options.nativeElement.open = false;
    this.filter();
  }

  removeRegion(){
    this.selectedRegion = null;
    this.filter();
  }

  filter(){
    this.filterChanged.emit([this.selectedRegion, this.countryName]);
  }
}
