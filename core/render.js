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
    // Square grid
    // ctx.strokeStyle = "black";
    // ctx.lineWidth = 1;
    // const margin = 128;
    // const width = canvas.width - margin * 2; // ex. 384 = 640 - 256
    // const height = canvas.height - margin * 2;
    // const tileWidth = width / scene.grid.width; // ex. 64 = 384 / 6
    // const tileHeight = height / scene.grid.height;
    // for (let y = 0; y < scene.grid.height; y++) {
    //     for (let x = 0; x < scene.grid.width; x++) {
    //         ctx.strokeRect(margin + x * tileWidth, margin + y * tileHeight, tileWidth, tileHeight);
    //     }
    // }
    // Hexagonal grid
    const color = "red";
    const gridOffset = 128;
    const canvasAvgSize = (canvas.width + canvas.height) / 2;
    const radius = canvasAvgSize / 10;
    let totalOffsetY = 0;
    for (let y = 0; y < 4; y++) {
        let offsetX = 0;
        let offsetY = 0;
        if (y % 2 === 1) {
            offsetX = radius;
            offsetY = radius / 2;
            totalOffsetY -= radius;
        }
        for (let x = 0; x < 3; x++) {
            renderShape(ctx, color, gridOffset + x * radius * 2 + offsetX, gridOffset + y * radius * 2 + offsetY + totalOffsetY, radius, 6, 90, 1.15);
        }
    }
}
function renderShape(ctx, color, x, y, radius, vertices, rotation = 0, scaleX = 1, scaleY = 1) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    const angle = Math.PI * 2 / vertices;
    ctx.beginPath();
    const rotationRadians = degreesToRadians(rotation);
    for (let i = 0; i <= vertices; i++) {
        ctx.lineTo(x + radius * Math.cos((i * angle) + rotationRadians) * scaleX, y + radius * Math.sin((i * angle) + rotationRadians) * scaleY);
    }
    ctx.stroke();
}
