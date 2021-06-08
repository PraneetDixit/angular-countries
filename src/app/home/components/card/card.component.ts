import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() country: any;
  imgSrc!: string;
  titleText!: string;

  constructor() { }
  
  ngOnInit(){
    this.imgSrc = `${this.country.flag}#svgView(preserveAspectRatio(none))`;
    this.titleText = `Flag of ${this.country.name}`;
  }
}
