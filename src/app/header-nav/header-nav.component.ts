import { Component} from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent{
  dark: boolean;
  _subscription;

  constructor(private themeService : ThemeService) {
    this.dark = themeService.getTheme();
    this._subscription = themeService.themeChange.subscribe((value) => { 
      this.dark = value; 
    });
  }

  togTheme(){
    this.themeService.toggleTheme();
  }
}
