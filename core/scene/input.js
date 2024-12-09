import { directionVector2 } from "../../utils/vector2.js";
import { Projectile } from "./projectile.js";
export class Input {
    canvas;
    scene;
    mouseOrigin = { x: 0, y: 0 };
    //worldOrigin: Vector2;
    keyW = false;
    keyS = false;
    keyA = false;
    keyD = false;
    showFPS = false;
    constructor(canvas, scene) {
        this.canvas = canvas;
        this.scene = scene;
        console.log(this);
    }
    addEventListeners() {
        this.canvas.addEventListener("mousemove", (event) => this.#onMouseMove(event));
        this.canvas.addEventListener("mousedown", (event) => this.#onMouseDown(event));
        this.canvas.addEventListener("mouseup", (event) => this.#onMouseUp(event));
        document.addEventListener("keydown", (event) => this.#onKeyDown(event));
        document.addEventListener("keyup", (event) => this.#onKeyUp(event));
    }
    #onMouseMove(e) {
        const canvasBoundingClientRect = this.canvas.getBoundingClientRect();
        this.mouseOrigin = {
            x: Math.floor(e.x - canvasBoundingClientRect.x + 1),
            y: e.y - Math.floor(canvasBoundingClientRect.y)
        };
        // this.worldOrigin = {x: this.screenOrigin.x + this.scene.camera.origin.x, y: this.screenOrigin.y + this.scene.camera.origin.y};
    }
    #onMouseDown(e) {
        // Shooting
        const shot = new Projectile(this.scene.player.entity.origin, 50);
        shot.entity.velocity = directionVector2(this.scene.player.entity.origin, this.mouseOrigin);
        this.scene.projectiles.push(shot);
        this.scene.active.push(shot.entity);
    }
    #onMouseUp(e) {
    }
    #onKeyDown(e) {
        switch (e.code) {
            case "KeyW":
                this.keyW = true;
                break;
            case "KeyS":
                this.keyS = true;
                break;
            case "KeyA":
                this.keyA = true;
                break;
            case "KeyD":
                this.keyD = true;
                break;
            case "Backquote":
                this.showFPS = !this.showFPS;
                break;
        }
    }
    #onKeyUp(e) {
        switch (e.code) {
            case "KeyW":
                this.keyW = false;
                break;
            case "KeyS":
                this.keyS = false;
                break;
            case "KeyA":
                this.keyA = false;
                break;
            case "KeyD":
                this.keyD = false;
                break;
        }
    }
}
