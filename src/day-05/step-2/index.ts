import { Day5 } from '..';

export class Day5Step2 extends Day5 {

    public nextOperationValue(value: number): number {
        return value >= 3 ? value - 1 : value + 1;
    }
}
