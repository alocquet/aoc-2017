import { Day6 } from '..';

export class Day6Step2 extends Day6 {

    public execute(input: string): number {
        let states = this.getStatesUntilLoop(input);
        return states.length - 1 - states.indexOf(states[states.length - 1]);
    }

}
