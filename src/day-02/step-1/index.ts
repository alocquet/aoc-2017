import { Day2 } from "..";

export class Day2Step1 extends Day2 {

    checksum(digits: number[]): number {
        return Math.max.apply(Math.max, digits) - Math.min.apply(Math.min, digits);
    }
}