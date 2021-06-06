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

  isDark!: boolean;

  constructor(private themeService: ThemeService){
    this.isDark = themeService.getDefaultTheme();
  }

  toggleTheme(){
    this.isDark = this.themeService.toggleTheme();
  }
}