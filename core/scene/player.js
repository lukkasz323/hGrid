import { Entity } from "./entity.js";
export class Player {
    entity;
    constructor(origin = { x: 0, y: 0 }) {
        this.entity = new Entity({ x: origin.x, y: origin.y }, 16);
    }
}
