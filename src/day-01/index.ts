import { Day } from '../day';

export abstract class Day1 extends Day<number> {

    public execute(input: string): number {
        const digits = input.split('').map((digit) => parseInt(digit, 10));
        let sum = 0;
        for (let idx = 0; idx < digits.length; idx++) {
            const otherIdx = this.getOtherIdxForComparaison(digits, idx);
            if (digits[idx] === digits[otherIdx]) {
                sum += digits[idx];
            }
        }
        return sum;
    }

    public abstract getOtherIdxForComparaison(digits: number[], idx: number): number;
}
