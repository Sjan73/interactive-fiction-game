import {ITheme} from "../../interfaces/theme.interface";

export class DarkTheme implements ITheme {
  applyTheme() {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  }
}
