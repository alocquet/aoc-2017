import { Day8 } from '..';

export class Day8Step2 extends Day8 {

    public execute(input: string): number {
        return this.executeSteps(input).max;
    }

}
