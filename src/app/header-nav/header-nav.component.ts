import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent{
  @Input() dark!: boolean;
  @Output() themeToggled: EventEmitter<any> = new EventEmitter<any>();

  togTheme(){
    this.themeToggled.emit();
  }
}