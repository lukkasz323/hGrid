import { FPSCounter } from "../../utils/fpsCounter.js";
import { Entity } from "./entity.js";
import { Item } from "./item.js";
import { Player } from "./player.js";
import { Projectile } from "./projectile.js";

export class Scene {
    static DIAGONAL: number = 0.7071067811865475;

    gridSize: number = 32;
    fpsCounter = new FPSCounter();
    ticks: number = 0;
    items: Item[] = [];
    active: Entity[] = [];
    enemies: Entity[] = [];
    projectiles: Projectile[] = [];
    player = new Player();

    constructor() {
        this.player = new Player({x: 64, y: 64});
        this.enemies.push(new Entity({x: 256, y: 256}));
        this.enemies.push(new Entity({x: 192, y: 512}));

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