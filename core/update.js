import { Scene } from "./scene/scene.js";
export function updateGame(scene, input, deltaTime) {
    if (input.showFPS) {
        scene.fpsCounter.update(deltaTime);
        console.log(scene.fpsCounter.calculateAverage());
    }
    // Player
    {
        const v = scene.player.entity.velocity;
        // Deceleration
        v.x = v.x / 1.2;
        v.y = v.y / 1.2;
        // Acceleration
        const keyCount = Number(input.keyW) + Number(input.keyS) + Number(input.keyA) + Number(input.keyD);
        let acceleration = 0;
        if (keyCount == 1)
            acceleration = scene.player.entity.speed;
        if (keyCount == 2)
            acceleration = scene.player.entity.speed * Scene.DIAGONAL;
        if (input.keyW)
            v.y -= acceleration;
        if (input.keyS)
            v.y += acceleration;
        if (input.keyA)
            v.x -= acceleration;
        if (input.keyD)
            v.x += acceleration;
    }
    // Active entities
    {
        // Movement
        for (const entity of scene.active) {
            entity.origin.x += entity.velocity.x * entity.speed;
            entity.origin.y += entity.velocity.y * entity.speed;
        }
    }
    // Projectiles
    {
        for (let i = 0; i < scene.projectiles.length; i++) {
            const p = scene.projectiles[i];
            console.log(p.lifetime);
            if (p.lifetime > 0) {
                --p.lifetime;
            }
            if (p.lifetime == 0) {
                scene.projectiles.splice(i, 1);
            }
            // Negative lifetime is meant to be infinite
        }
    }
    scene.ticks++;
}
