import { Vector2 } from "../../utils/vector2.js";
import { Entity } from "./entity.js";

export class Player {
    entity: Entity;

    constructor(origin: Vector2 = {x: 0, y: 0}) {
        this.entity = new Entity({x: origin.x, y: origin.y}, 16)
    }
}