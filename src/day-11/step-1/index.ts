import { Day11 } from '..';

export class Day11Step1 extends Day11 {

    public execute(input: string): number {
        return this.executeSteps(input).last;
    }

}
