import { FPSCounter } from "../../utils/fpsCounter.js";
import { Grid } from "./grid.js";
export class Scene {
    fpsCounter = new FPSCounter();
    ticks = 0;
    grid = new Grid();
    constructor() {
        console.log(this); // Debug
    }
}
