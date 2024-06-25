import { IScenario } from '../interfaces/game-scenario.interface';
import { Scene } from '../enums/scene.enum';
import englishScenario from '../data/english.json';
import {SceneData} from "../interfaces/scene-data.interface";

export class EnglishScenario implements IScenario {
  initialScene: Scene = Scene.Louvre;
  private sceneMap: Map<string, SceneData>;

  constructor() {
    this.sceneMap = new Map<string, SceneData>(
      Object.entries(englishScenario.scenes) as [string, SceneData][]
    );
  }

  getStory(scene: Scene): string {
    return this.sceneMap.get(scene)?.story || 'Unknown scene.';
  }

  getOptions(scene: Scene): string[] {
    return this.sceneMap.get(scene)?.options || [];
  }

  processCommand(scene: Scene, command: string): { newScene: Scene, response: string } {
    let response = 'You cannot do that.';
    let newScene = scene;

    const sceneData = this.sceneMap.get(scene);

    if (sceneData) {
      const commandResponse = sceneData.responses[command];
      if (commandResponse) {
        response = commandResponse.response;
        newScene = commandResponse.newScene as Scene;
      }
    }

    return { newScene, response };
  }
}
