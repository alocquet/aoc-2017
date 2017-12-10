import { Day10 } from '..';

export class Day10Step2 extends Day10 {

    public execute(input: string): string {
        let lengths = input.split('').map((elt) => elt.charCodeAt(0));
        lengths.push(17, 31, 73, 47, 23);
        let hash = this.computeFirstHash(256, lengths, 64);
        let denseHash = this.computeDenseHash(hash);
        return denseHash.map((digit) => ('0' + digit.toString(16)).substr(-2)).join('');
    }

    public computeDenseHash(sparseHash: number[]): number[] {
        let denseHash = [];
        while (sparseHash.length > 0) {
            let subHash = sparseHash.splice(0, 16);
            denseHash.push(subHash.reduce((a, b) => a ^ b));
        }
        return denseHash;
    }

}
