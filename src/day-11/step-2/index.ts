import { Day11 } from '..';

export class Day11Step2 extends Day11 {

    public execute(input: string): number {
        return this.executeSteps(input).max;
    }

}
