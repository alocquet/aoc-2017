import { Day14 } from '..';

export class Day14Step1 extends Day14 {

    public execute(input: string): number {
        return this.getDisk(input).reduce((sum, line) => sum + line.filter((elt) => elt === '1').length, 0);
    }

}
