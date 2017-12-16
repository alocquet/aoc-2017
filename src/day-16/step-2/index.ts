import { D16InstructionFactory, Day16 } from '..';

export class Day16Step2 extends Day16 {

    public execute(input: string, size = 16, steps = 1000000000): string {
        let state = this.generateInitialString(size);
        let instructions = input.split(',')
            .map((line) => D16InstructionFactory.create(line));
        let states = new Array<string>();
        for (let idx = 0; idx < steps; idx++) {
            states.push(state);
            state = super.executeOneStep(state, instructions);
            if (states.indexOf(state) !== -1) {
                // we have found a cycle -> compute the result
                let cycleSize = idx + 1 - states.indexOf(state);
                let resultIdx = 1 + (idx + (steps % cycleSize)) % states.length;
                return states[resultIdx];
            }
        }
        return state;
    }
}
