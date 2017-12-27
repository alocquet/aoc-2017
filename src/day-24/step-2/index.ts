import { Day24 } from '..';

export class Day24Step2 extends Day24 {

    public execute(input: string): number {
        let components = super.parse(input);
        return this.computeValidBridges(0, components, true).strength;
    }

}
