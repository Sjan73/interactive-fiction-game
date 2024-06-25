import { IScenario } from '../interfaces/game-scenario.interface';
import { Scene } from '../enums/scene.enum';
import ukrainianScenario from '../data/ukrainian.json';
import {SceneData} from "../interfaces/scene-data.interface";

export class UkrainianScenario implements IScenario {
  initialScene: Scene = Scene.Louvre;
  private sceneMap: Map<string, SceneData>;

  constructor() {
    this.sceneMap = new Map<string, SceneData>(
      Object.entries(ukrainianScenario.scenes) as [string, SceneData][]
    );
  }

  getStory(scene: Scene): string {
    return this.sceneMap.get(scene)?.story || 'Невідома сцена.';
  }

  getOptions(scene: Scene): string[] {
    return this.sceneMap.get(scene)?.options || [];
  }

  processCommand(scene: Scene, command: string): { newScene: Scene, response: string } {
    let response = 'Ви не можете це зробити.';
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
