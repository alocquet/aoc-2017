import { Day6 } from '..';

export class Day6Step1 extends Day6 {

    public execute(input: string): number {
        return this.getStatesUntilLoop(input).length - 1;
    }

}
