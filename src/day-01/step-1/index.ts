import { Day1 } from "..";

export class Day1Step1 extends Day1 {

    getOtherIdxForComparaison(digits: number[], idx: number): number {
        if (idx === digits.length - 1) {
            return 0;
        }
        return idx + 1;
    }

}