import {Scene} from "../enums/scene.enum";

export interface IScenario {
  initialScene: Scene;
  getStory(scene: Scene): string;
  getOptions(scene: Scene): string[];
  processCommand(scene: Scene, command: string): { newScene: Scene, response: string };
}
