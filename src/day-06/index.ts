import { Day } from '../day';

export abstract class Day6 extends Day<number> {

    public getStatesUntilLoop(input: string): string[] {
        let digits = input.split(/\s/).map((digit) => parseInt(digit, 10));
        let states = [];

        let state = digits;
        let stateString = JSON.stringify(state);
        while (states.indexOf(stateString) === -1) {
            states.push(stateString);
            state = this.nextConfig(state);
            stateString = JSON.stringify(state);
        }
        states.push(stateString);
        return states;
    }

    public nextConfig(input: number[]): number[] {
        let max = Math.max.apply(Math.max, input);
        let idx = input.indexOf(max);
        input[idx++] = 0;
        while (max > 0) {
            if (idx >= input.length) {
                idx = 0;
            }
            input[idx++]++;
            max--;
        }
        return input;
    }

}
