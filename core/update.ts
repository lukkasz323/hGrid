import { Vector2 } from "../utils/vector2.js";
import { Input } from "./scene/input.js";
import { Scene } from "./scene/scene.js";

export function updateGame(scene: Scene, input: Input, deltaTime: number) {
    if (input.showFPS) {
        scene.fpsCounter.update(deltaTime);
        console.log(scene.fpsCounter.calculateAverage());
    }

    scene.ticks++;
}