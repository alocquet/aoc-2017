import { Day1 } from '..';

export class Day1Step2 extends Day1 {

    public getOtherIdxForComparaison(digits: number[], idx: number): number {
        const otherIdx = idx + digits.length / 2;
        if (otherIdx >= digits.length) {
            return otherIdx - digits.length;
        }
        return otherIdx;
    }
}
