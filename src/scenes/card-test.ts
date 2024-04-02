import { Color, Scene, vec } from "excalibur";
import { Card } from "../actors/Card";

export class CardTestScene extends Scene {
  constructor() {
    super();

    this.backgroundColor = Color.Viridian;
    this.add(new Card(150, 200, vec(200, 200), Color.White));
  }
}
