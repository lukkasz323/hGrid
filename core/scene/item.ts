import { Modifier } from "./modifier.js";

export class Item {
    mods: Modifier[] = [];

    constructor() {
    }

    static Generate(): Item {
        const item = new Item();

        while (Math.random() <= 0.1) {
            item.mods.push(Modifier.Generate());
        }

        return item;
    }
}