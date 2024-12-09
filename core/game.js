import { Scene } from "./scene/scene.js";
import { renderGame } from "./render.js";
import { updateGame } from "./update.js";
import { Input } from "./scene/input.js";
export class Game {
    canvas;
    scene;
    input;
    constructor(canvas) {
        this.canvas = canvas;
        this.scene = new Scene();
        this.input = new Input(canvas, this.scene);
    }
    run() {
        //renderGame(this.scene, this.canvas);
        let lastDate = performance.now();
        requestAnimationFrame(() => gameLoop(this.scene, this.canvas, this.input));
        this.input.addEventListeners();
        function gameLoop(scene, canvas, input) {
            let now = performance.now();
            let deltaTime = now - lastDate;
            lastDate = now;
            updateGame(scene, input, deltaTime);
            renderGame(scene, canvas);
            requestAnimationFrame(() => gameLoop(scene, canvas, input));
        }
    }
}
