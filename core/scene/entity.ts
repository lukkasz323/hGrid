import { Vector2} from "../../utils/vector2.js";

export class Entity {
    velocity: Vector2 = {x: 0, y: 0};

    constructor(public origin: Vector2 = {x: 0, y: 0}, public radius: number = 16, public speed: number = 1) {
    }
}