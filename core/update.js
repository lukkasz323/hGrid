export function updateGame(scene, input, deltaTime) {
    if (input.showFPS) {
        scene.fpsCounter.update(deltaTime);
        console.log(scene.fpsCounter.calculateAverage());
    }
    scene.ticks++;
}
