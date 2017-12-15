import { Day15, Day15Config } from '..';

export class Day15Step2 extends Day15 {

    public nextValue(a: number, config: Day15Config): number {
        let result = a;
        do {
            result = result * config.factor % 2147483647;
        } while (result & config.modulo);
        return result;
    }

}
