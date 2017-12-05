import { Day } from '../day';

export abstract class Day2 extends Day<number> {

    public execute(input: string): number {
        return input.split('\n').map((line) => this.checksumLine(line)).reduce((res, elt) => res + elt, 0);
    }

    public checksumLine(line: string): number {
        let digits = line.split(/\s+/).map((elt) => parseInt(elt, 10));
        return this.checksum(digits);
    }

    public abstract checksum(line: number[]): number;
}
