import { Day10 } from '..';

export class Day10Step1 extends Day10 {

    public execute(numberElements: number, lengths: string): number {
        let hash = this.computeFirstHash(numberElements, lengths.split(',').map((elt) => parseInt(elt, 10)), 1);
        return hash[0] * hash[1];
    }

}
