import { Day13 } from '..';

export class Day13Step2 extends Day13 {

    public execute(input: string): number {
        let { layers, maxLayer } = this.parse(input);
        let time = 0;
        let caughtPositions;
        do {
            // Brute Force :D
            caughtPositions = this.getCaughtPositions(layers, time++, maxLayer);
        } while (caughtPositions.length > 0);
        return time - 1;
    }

}
