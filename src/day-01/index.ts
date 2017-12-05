import { Day } from '../day';

export abstract class Day1 extends Day<number> {

    execute(input: string): number {
        let digits = input.split('').map(digit => parseInt(digit));
        let sum = 0;
        for (let idx = 0; idx < digits.length; idx++) {
            let otherIdx = this.getOtherIdxForComparaison(digits, idx);
            if (digits[idx] === digits[otherIdx]) {
                sum += digits[idx];
            }
        }
        return sum;
    }

    abstract getOtherIdxForComparaison(digits: number[], idx: number): number;
}