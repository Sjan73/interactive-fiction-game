import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GameService} from "../../core/services/game/game.service";
import {UkrainianScenario} from "../../core/strategies/ukrainian-scenario.strategy";
import {EnglishScenario} from "../../core/strategies/english-scenario.strategy";
import {Theme} from "../../core/enums/theme.enum";
import {ThemeService} from "../../core/services/themes/theme.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  output: string = '';
  options: string[] = [];
  theme = Theme;

  @ViewChild('terminal') terminal!: ElementRef;

  constructor(private gameService: GameService, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.restartGame();
  }

  processCommand(option: string) {
    const response = this.gameService.processCommand(option);
    this.updateOutput(response);
    this.options = this.gameService.getOptions();
    setTimeout(() => this.scrollToBottom(), 100);
  }

  updateOutput(text: string) {
    this.output += '\n\n' + text.charAt(0).toUpperCase() + text.slice(1);
  }

  scrollToBottom() {
    if (this.terminal && this.terminal.nativeElement) {
      this.terminal.nativeElement.scrollTop = this.terminal.nativeElement.scrollHeight;
    }
  }

  changeTheme(theme: Theme): void {
    this.themeService.setTheme(theme);
  }

  changeLanguage(language: string): void {
    if (language === 'uk') {
      this.gameService.setScenario(new UkrainianScenario());
    } else {
      this.gameService.setScenario(new EnglishScenario());
    }
    this.restartGame();
  }

  restartGame() {
    this.output = '';
    this.options = [];
    this.gameService.restartGame();
    this.output += this.gameService.getStory();
    this.options = this.gameService.getOptions();
    setTimeout(() => this.scrollToBottom(), 100);
  }
}
