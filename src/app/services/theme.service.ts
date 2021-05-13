import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _isDark: boolean;
  themeChange: Subject<boolean> = new Subject<boolean>();

  constructor(){
    this._isDark = false;
  }

  getTheme(){
    return this._isDark;
  }

  toggleTheme(){
    this.changeTheme(this._isDark ? false : true);
  }

  getDefaultTheme(){
    this.changeTheme((window.matchMedia('(prefers-color-scheme: dark)').matches || localStorage.getItem("ngAppDarkTheme")) ? true : false);
    console.log("Def func init", this._isDark);
  }

  changeTheme(val:boolean){
    this._isDark = val;
    this.themeChange.next(val);
    localStorage.setItem("ngAppDarkTheme", val? "true" : "");
  }
}