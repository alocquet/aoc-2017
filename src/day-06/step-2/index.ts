import { Day6 } from '..';

export class Day6Step2 extends Day6 {

    public execute(input: string): number {
        let result = this.getStatesUntilLoop(input);
        return result.states.size - result.states.get(result.cycle);
    }

}
