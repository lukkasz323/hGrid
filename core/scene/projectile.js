import { Entity } from "./entity.js";
export class Projectile {
    lifetime;
    entity;
    constructor(origin = { x: 0, y: 0 }, lifetime = -1) {
        this.lifetime = lifetime;
        this.entity = new Entity({ x: origin.x, y: origin.y }, 4, 10);
    }
}
