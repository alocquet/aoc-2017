import { Day } from '../day';
import { Day10Step2 } from '../day-10/step-2';

export abstract class Day14 extends Day<number> {

    private knotHasher = new Day10Step2();

    public getDisk(input: string): string[][] {
        let result = [];
        for (let step = 0; step < 128; step++) {
            // compute hash, transform to binary representation and concatenate arrays
            let hash = this.knotHasher.execute(input + '-' + step);
            result.push([].concat.apply([], hash
                .split('')
                .map(this.hexToBinaryArray)));
        }
        return result;
    }

    public hexToBinaryArray(char: string) {
        return ('000' + parseInt(char, 16).toString(2)).
            substr(-4)
            .split('');
    }

}
