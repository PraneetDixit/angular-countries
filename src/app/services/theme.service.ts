import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _isDark: boolean = false;

  toggleTheme(): boolean{
    this.changeTheme(!(this._isDark));
    return this._isDark;
  }

  getDefaultTheme() : boolean{
    this.changeTheme((window.matchMedia('(prefers-color-scheme: dark)').matches || localStorage.getItem("ngAppDarkTheme")) ? true : false);
    return this._isDark;
  }

  changeTheme(val:boolean){
    this._isDark = val;
    localStorage.setItem("ngAppDarkTheme", val? "true" : "");
  }
}
