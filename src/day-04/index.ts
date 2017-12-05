import { Day } from '../day';

export abstract class Day4 extends Day<number> {

    public execute(input: string): number {
        return input.split('\n').map((line) => this.valid(line)).reduce((res, elt) => res + (elt ? 1 : 0), 0);
    }

    public valid(line: string): boolean {
        const words = line.split(' ');
        return words.find((value, idx) => {
            if (idx < words.length - 1) {
                return words.slice(idx + 1, words.length).indexOf(value) !== -1;
            }
            return false;
        }) === undefined;
    }
}
