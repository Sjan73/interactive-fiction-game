import { Injectable } from '@angular/core';
import {ITheme} from "../../interfaces/theme.interface";
import {LightTheme} from "./light-theme.impl";
import {DarkTheme} from "./dark-theme.impl";
import {Theme} from "../../enums/theme.enum";

@Injectable({
  providedIn: 'root',
})
export class ThemeFactory {
  createTheme(themeType: Theme.Light | Theme.Dark): ITheme {
    switch (themeType) {
      case Theme.Light:
        return new LightTheme();
      case Theme.Dark:
        return new DarkTheme();
      default:
        throw new Error('Unsupported theme type');
    }
  }
}
