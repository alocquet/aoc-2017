import { Day13 } from '..';

export class Day13Step1 extends Day13 {

    public execute(input: string): number {
        let { layers, maxLayer } = this.parse(input);
        let caughtPositions = this.getCaughtPositions(layers, 0, maxLayer);
        return caughtPositions.reduce((sum, position) => sum + position * layers.get(position), 0);
    }

}
