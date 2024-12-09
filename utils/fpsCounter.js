export class FPSCounter {
    accuracy;
    #fpsRecords = [];
    constructor(accuracy = 100) {
        this.accuracy = accuracy;
    }
    calculateAverage() {
        const sum = this.#fpsRecords.reduce((a, b) => a + b, 0);
        const a = sum / this.#fpsRecords.length || 0;
        return Math.round(sum / this.#fpsRecords.length || 0);
    }
    update(deltaTime) {
        const fps = 1000 / deltaTime;
        this.#fpsRecords.push(fps);
        if (this.#fpsRecords.length > this.accuracy) {
            this.#fpsRecords.shift();
        }
    }
}
