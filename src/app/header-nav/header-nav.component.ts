import { Component} from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent{
  dark: boolean;

  constructor(private themeService : ThemeService) {
    this.dark = themeService.getTheme();
  }

  togTheme(){
    this.themeService.toggleTheme();
    this.dark = this.themeService.getTheme();
  }
}
