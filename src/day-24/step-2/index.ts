import { Day24 } from '..';

export class Day24Step2 extends Day24 {

    public execute(input: string): number {
        let components = super.parse(input);
        let bridgesStrength = this.computeValidBridges(0, components);
        let maxLength = bridgesStrength.reduce((max, compo) => Math.max(max, compo.length), 0);
        return bridgesStrength.filter((bridge) => bridge.length === maxLength)
            .reduce((max, bridge) =>
                Math.max(max, bridge.reduce((sum, compo) => sum + compo.strength, 0))
            , 0);
    }

}
