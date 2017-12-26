import { D24Component, Day24 } from '..';

export class Day24Step1 extends Day24 {

    public execute(input: string): number {
        let components = super.parse(input);
        let bridges = this.computeValidBridges(0, components);
        return bridges.reduce((max, bridge) =>
            Math.max(max, bridge.reduce((sum, compo) => sum + compo.strength, 0))
            , 0);
    }

}
