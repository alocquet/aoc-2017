import { Day } from '../day';

export abstract class Day13 extends Day<number> {

    private static regex = /(\d+): (\d+)/;

    public parse(input: string): { layers: Map<number, number>, maxLayer: number } {
        let layers = new Map<number, number>();
        let maxLayer = 0;
        input.split('\n').forEach((line) => {
            let values = Day13.regex.exec(line);
            let layer = parseInt(values[1], 10);
            maxLayer = Math.max(maxLayer, layer);
            layers.set(layer, parseInt(values[2], 10));
        });
        return { layers, maxLayer };
    }

    public getCaughtPositions(layers: Map<number, number>, startTime: number, maxLayer: number, breakOnCaught = false) {
        let caughtPositions = [];
        for (let time = startTime; time < startTime + maxLayer + 1; time++) {
            let layerDepth = layers.get(time - startTime);
            if (layerDepth) {
                let position = this.getScannerPosition(layerDepth, time);
                if (position === 0) {
                    caughtPositions.push(time - startTime);
                    if (breakOnCaught) {
                        return caughtPositions;
                    }
                }
            }
        }
        return caughtPositions;
    }

    public getScannerPosition(layerDepth: number, time: number): number {
        if (time < layerDepth) {
            return time;
        }
        let roundSize = (2 * (layerDepth - 1));
        let idx = (time - layerDepth) % roundSize;
        if (idx < roundSize / 2) {
            return layerDepth - 2 - idx;
        }
        return roundSize - idx;
    }

}
