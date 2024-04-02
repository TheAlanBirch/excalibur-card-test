import { Actor, Color, Vector, vec } from "excalibur";

export class Card extends Actor {
  constructor(width: number, height: number, pos: Vector, color: Color) {
    super({
      width: width,
      height: height,
      pos: pos,
      color: color,
    });
  }
}
