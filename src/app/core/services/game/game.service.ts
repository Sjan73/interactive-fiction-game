import { Injectable } from '@angular/core';
import {IScenario} from "../../interfaces/game-scenario.interface";
import {UkrainianScenario} from "../../strategies/ukrainian-scenario.strategy";
import {Scene} from "../../enums/scene.enum";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private scenario: IScenario;
  private currentScene: Scene = Scene.Louvre;
  private story: string = '';
  private options: string[] = [];

  constructor() {
    this.scenario = new UkrainianScenario();
    this.restartGame();
  }

  getStory(): string {
    return this.story;
  }

  getOptions(): string[] {
    return this.options;
  }

  restartGame(): void {
    this.currentScene = this.scenario.initialScene;
    this.story = this.scenario.getStory(this.currentScene);
    this.options = this.scenario.getOptions(this.currentScene);
  }

  processCommand(command: string): string {
    const result = this.scenario.processCommand(this.currentScene, command);
    this.currentScene = result.newScene;
    this.story = this.scenario.getStory(this.currentScene);
    this.options = this.scenario.getOptions(this.currentScene);
    return result.response;
  }

  setScenario(scenario: IScenario): void {
    this.scenario = scenario;
    this.restartGame();
  }
}
