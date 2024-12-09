import { FPSCounter } from "../../utils/fpsCounter.js";
import { Entity } from "./entity.js";
import { Player } from "./player.js";
export class Scene {
    static DIAGONAL = 0.7071067811865475;
    gridSize = 32;
    fpsCounter = new FPSCounter();
    ticks = 0;
    items = [];
    active = [];
    enemies = [];
    projectiles = [];
    player = new Player();
    constructor() {
        this.player = new Player({ x: 64, y: 64 });
        this.enemies.push(new Entity({ x: 256, y: 256 }));
        this.enemies.push(new Entity({ x: 192, y: 512 }));
        this.active.push(this.player.entity);
        for (const p of this.projectiles) {
            this.active.push(p.entity);
        }
        for (const e of this.enemies) {
            this.active.push(e);
        }
        console.log(this);
    }
    checkGrid() {
    }
}
