import { Component, HostBinding } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @HostBinding('class') get darkClass(){
    return this.isDark ? "dark" : "";
  }

  isDark = false;
  _subscription;

  constructor(private themeService: ThemeService){
    this._subscription = themeService.themeChange.subscribe((value) => { 
      this.isDark = value; 
    });
    themeService.getDefaultTheme();
  }
}
