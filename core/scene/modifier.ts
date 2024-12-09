export class Modifier {
    value: number;

    constructor() {
    }

    static Generate() {
        const mod = new Modifier();

        mod.value = Math.random();

        return mod;
    }
}