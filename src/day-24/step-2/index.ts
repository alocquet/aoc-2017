import { Day24 } from '..';

export class Day24Step2 extends Day24 {

    public execute(input: string): number {
        let components = super.parse(input);
        let bridges = this.computeValidBridges(0, components);
        return bridges.reduce((a, b) => {
            if (a.length === b.length) {
                return (a.strength >= b.strength) ? a : b;
            }
            return (a.length > b.length) ? a : b;
        }).strength;
    }

}
