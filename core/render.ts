import { Scene } from "./scene/scene.js";

export function renderGame(scene: Scene, canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");

    renderBackground(ctx, canvas);
    renderEntities(ctx, scene);
    renderDebug(ctx, scene);
}

function renderDebug(ctx: CanvasRenderingContext2D, scene: Scene) {
    ctx.fillStyle = "black";
    const v = scene.player.entity.velocity;
    ctx.fillText(Math.abs(v.x) > 0.01 ? v.x.toString() : "0~", 32, 32);
    ctx.fillText(Math.abs(v.y) > 0.01 ? v.y.toString() : "0~", 32, 64);
    ctx.fillText(scene.active.length.toString(), 32, 128);
}

function renderBackground(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// function renderGrid(ctx: CanvasRenderingContext2D, scene: Scene, canvas: HTMLCanvasElement) {
//     ctx.strokeStyle = "black";
//     ctx.lineWidth = 2;
//     for (let y = 0; y < canvas.height / scene.gridSize; y++) {
//         for (let x = 0; x < canvas.width / scene.gridSize; x++) {
//             ctx.strokeRect(x * scene.gridSize, y * scene.gridSize, scene.gridSize, scene.gridSize)
//         }
//     }
// }

function renderEntities(ctx: CanvasRenderingContext2D, scene: Scene) {
    // Player
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(scene.player.entity.origin.x, scene.player.entity.origin.y, scene.player.entity.radius, 0, 2 * Math.PI)
    ctx.stroke();

    // Enemies
    ctx.strokeStyle = "red";
    for (const e of scene.enemies) {
        ctx.beginPath();
        ctx.arc(e.origin.x, e.origin.y, e.radius, 0, 2 * Math.PI)
        ctx.stroke();
    }

    // Projectiles
    ctx.strokeStyle = "orange";
    for (const p of scene.projectiles) {
        const e = p.entity;
        
        ctx.beginPath();
        ctx.arc(e.origin.x, e.origin.y, e.radius, 0, 2 * Math.PI)
        ctx.stroke();
    }

}

function renderItemDescription(ctx: CanvasRenderingContext2D, scene: Scene) {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeRect(32, 32, 256, 512);

    if (scene.items[0]) {
    ctx.fillStyle = "black";
    ctx.font = "bold 16px arial";
        ctx.fillText(`Mods: ${scene.items[0].mods.length}`, 48, 64);
        for (let i = 0; i < scene.items[0].mods.length; i++) {
            const mod = scene.items[0].mods[i];

            ctx.fillText(`${mod.value}`, 64, 64 + 20 + (i * 20));
        }
    }
}

function renderItems(ctx: CanvasRenderingContext2D, scene: Scene) {
    ctx.fillStyle = "black";
    ctx.font = "bold 16px arial";
    for (let i = 0; i < scene.items.length; i++) {
        const item = scene.items[i];

        ctx.fillText(`${item.mods.length}`, 384, 64 + 20 + (i * 20));
    }
}

function renderItemCountByRarity(ctx: CanvasRenderingContext2D, scene: Scene) {
    ctx.fillStyle = "black";
    ctx.font = "bold 16px arial";

    ctx.fillText(`0:   ${scene.items.filter(i => i.mods.length == 0).length}`, 320, 64);
    ctx.fillText(`1:   ${scene.items.filter(i => i.mods.length == 1).length}`, 320, 64 + 20);
    ctx.fillText(`2:   ${scene.items.filter(i => i.mods.length == 2).length}`, 320, 64 + 40);
    ctx.fillText(`3:   ${scene.items.filter(i => i.mods.length == 3).length}`, 320, 64 + 60);
    ctx.fillText(`3+: ${scene.items.filter(i => i.mods.length > 3).length}`, 320, 64 + 80);
}