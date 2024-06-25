import {ITheme} from "../../interfaces/theme.interface";

export class LightTheme implements ITheme {
  applyTheme() {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
  }
}
