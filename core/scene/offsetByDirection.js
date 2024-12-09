import { Direction } from "./direction.js";
export const offsetByDirection = {
    [Direction.North]: { x: 0, y: -1 },
    [Direction.South]: { x: 0, y: 1 },
    [Direction.West]: { x: 0, y: -1 },
    [Direction.East]: { x: 0, y: 1 },
};
