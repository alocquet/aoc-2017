import { Day15, Day15Config } from '..';

export class Day15Step1 extends Day15 {

    public nextValue(a: number, config: Day15Config): number {
        return a * config.factor % 2147483647;
    }

}
