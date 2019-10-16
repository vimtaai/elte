import { Planet } from "./planet.js";
import { context } from "./canvas.js";

export class State {
  constructor() {
    const center = {
      x: context.canvas.width / 2,
      y: context.canvas.height / 2
    };

    const sun = new Planet(8, "yellow", 0, 0, center);
    const mercury = new Planet(1.52, "lightgray", 30, 1/0.24, sun);
    const venus = new Planet(3.8, "white", 71, 1/0.61, sun);
    const earth = new Planet(4, "lightblue", 100, 1/1, sun);
    const moon = new Planet(1.09, "lightgray", 12, 1/0.075, earth);
    const mars = new Planet(2.12, "orange", 140, 1/1.88, sun);
    const phobos = new Planet(0.44, "lightgray", 7, 1/0.0766, mars);
    const deimos = new Planet(0.24, "lightgray", 12, 1/0.3035, mars);

    this.planets = [sun, mercury, venus, earth, mars, moon, phobos, deimos];
  }
}