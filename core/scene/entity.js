export class Entity {
    origin;
    radius;
    speed;
    velocity = { x: 0, y: 0 };
    constructor(origin = { x: 0, y: 0 }, radius = 16, speed = 1) {
        this.origin = origin;
        this.radius = radius;
        this.speed = speed;
    }
}
