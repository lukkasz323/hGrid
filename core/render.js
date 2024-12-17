import { degreesToRadians } from "../utils/utils.js";
export function renderGame(scene, canvas) {
    const ctx = canvas.getContext("2d");
    renderBackground(ctx, canvas);
    renderDebugGrid(ctx);
    renderGrid(ctx, scene, canvas);
    renderDebug(ctx, scene);
}
function renderDebug(ctx, scene) {
    ctx.fillStyle = "black";
    ctx.fillText("x", 32, 32);
    ctx.fillText("y", 32, 64);
}
function renderDebugGrid(ctx) {
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 0.1;
    const tileSize = 64;
    const tileWidth = tileSize;
    const tileHeight = tileSize;
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            ctx.strokeRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
        }
    }
}
function renderBackground(ctx, canvas) {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function renderGrid(ctx, scene, canvas) {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    const margin = 128;
    const width = canvas.width - margin * 2; // ex. 384 = 640 - 256
    const height = canvas.height - margin * 2;
    const tileWidth = width / scene.grid.width; // ex. 64 = 384 / 6
    const tileHeight = height / scene.grid.height;
    for (let y = 0; y < scene.grid.height; y++) {
        for (let x = 0; x < scene.grid.width; x++) {
            ctx.strokeRect(margin + x * tileWidth, margin + y * tileHeight, tileWidth, tileHeight);
        }
    }
    renderShape(ctx, 128, 128, 64, 6, 90, 1.15);
}
function renderShape(ctx, x, y, radius, vertices, rotation = 0, scaleX = 1, scaleY = 1) {
    const angle = Math.PI * 2 / vertices;
    ctx.beginPath();
    const rotationRadians = degreesToRadians(rotation);
    for (let i = 0; i <= vertices; i++) {
        ctx.lineTo(x + radius * Math.cos(i * angle + rotationRadians) * scaleX, y + radius * Math.sin(i * angle + rotationRadians) * scaleY);
    }
    ctx.stroke();
}
