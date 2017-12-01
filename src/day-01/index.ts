import { Day } from "../day";

export abstract class Day1 extends Day<number> {

    execute(input: string): number {
        let digits = input.split('').map(digit => parseInt(digit));
        let step = this.getStep(digits.length);
        for (let idx = 0; idx < step; idx++) {
            digits.push(digits[idx]);
        }
        let sum = 0;
        for (let idx = 0; idx < digits.length - step; idx++) {
            if (digits[idx] === digits[idx + step]) {
                sum += digits[idx];
            }
        }
        return sum;
    }

    abstract getStep(size: number): number;
}