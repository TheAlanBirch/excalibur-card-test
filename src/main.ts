import { Engine } from "excalibur";
import { Player } from "./player";
import { loader } from "./resources";
import { scenes } from "./managers/scene-manager";

class Game extends Engine {
  constructor() {
    super({ width: window.innerWidth, height: window.innerHeight });
  }
  initialize() {
    Object.entries(scenes).forEach(([key, scene]) => {
      this.addScene(key, scene);
    });

    this.start().then(() => {
      this.goToScene("card-test");
    });
  }
}

export const game = new Game();
game.initialize();
