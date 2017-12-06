import { Day } from '../day';

export abstract class Day6 extends Day<number> {

    public getStatesUntilLoop(input: string): { states: Map<string, number>, cycle: string } {
        let digits = input.split(/\s/).map((digit) => parseInt(digit, 10));
        let states = new Map<string, number>();

        let state = digits;
        let stateString = state.toString();
        let idx = 0;
        while (states.get(stateString) === undefined) {
            states.set(stateString, idx++);
            state = this.nextConfig(state);
            stateString = state.toString();
        }
        return { states, cycle: stateString };
    }

    public nextConfig(input: number[]): number[] {
        // retrieve max
        let max = Math.max.apply(Math.max, input);
        let maxIdx = input.indexOf(max);

        // init max
        input[maxIdx] = 0;

        let div = Math.floor(max / input.length);
        let mod = max % input.length;

        // compute next values
        return input.map((digit, idx) => {
            let result = digit + div;
            if ((idx > maxIdx && idx <= (maxIdx + mod))
                || (idx <= maxIdx && idx <= (maxIdx + mod - input.length))) {
                result++;
            }
            return result;
        });
    }

}
