export interface SceneData {
  story: string;
  options: string[];
  responses: {
    [command: string]: {
      newScene: string;
      response: string;
    };
  };
}
