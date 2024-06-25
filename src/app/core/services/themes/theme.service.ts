import { Injectable } from '@angular/core';
import {ITheme} from "../../interfaces/theme.interface";
import {ThemeFactory} from "./theme.factory";
import {Theme} from "../../enums/theme.enum";

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: ITheme;

  constructor(private themeFactory: ThemeFactory) {
    this.currentTheme = this.themeFactory.createTheme(Theme.Light);
    this.applyTheme();
  }

  setTheme(themeType: Theme.Light | Theme.Dark) {
    this.currentTheme = this.themeFactory.createTheme(themeType);
    this.applyTheme();
  }

  applyTheme() {
    if (this.currentTheme) {
      this.currentTheme.applyTheme();
    }
  }
}
