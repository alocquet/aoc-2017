import { Day } from '../day';

export abstract class Day2 extends Day<number> {

    execute(input: string): number {
        return input.split('\n').map(line => this.checksumLine(line)).reduce((res, elt) => res + elt, 0);
    }

    checksumLine(line: String): number {
        let digits = line.split(/\s+/).map(elt => parseInt(elt));
        return this.checksum(digits);
    }

    abstract checksum(line: number[]): number;
}