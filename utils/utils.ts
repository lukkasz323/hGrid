export function busy(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

export function degreesToRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export const DIAGONAL: number = 0.7071067811865475;