import { Day2 } from '..';

export class Day2Step2 extends Day2 {

    public checksum(digits: number[]): number {
        for (let digit of digits) {
            let secondDigit = digits.find((elt) => elt !== digit && (elt % digit === 0 || digit % elt === 0));
            if (secondDigit) {
                return Math.max(secondDigit, digit) / Math.min(secondDigit, digit);
            }
        }
    }
}
