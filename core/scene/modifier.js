export class Modifier {
    value;
    constructor() {
    }
    static Generate() {
        const mod = new Modifier();
        mod.value = Math.random();
        return mod;
    }
}
