import { Vector2 } from "../../utils/vector2.js";
import { Entity } from "./entity.js";

export class Projectile {
    entity: Entity;

    constructor(origin: Vector2 = {x: 0, y: 0}, public lifetime: number = -1) {
        this.entity = new Entity({x: origin.x, y: origin.y}, 4, 10);
    }
}