import { Day } from '../day';
import { Day10Step2 } from '../day-10/step-2';

export abstract class Day15 {

    public static config = {
        a: { factor: 16807, modulo: 3 },
        b: { factor: 48271, modulo: 7 },
    };

    public execute(genAStart: number, genBStart: number, iterations: number): number {
        let result = 0;
        let genA = genAStart;
        let genB = genBStart;
        for (let idx = 0; idx < iterations; idx++) {
            genA = this.nextValue(genA, Day15.config.a);
            genB = this.nextValue(genB, Day15.config.b);
            if (this.compare16LowestBits(genA, genB)) {
                result++;
            }
        }
        return result;
    }

    public compare16LowestBits(a: number, b: number): boolean {
        return (a & 0xFFFF) === (b & 0xFFFF);
    }

    public abstract nextValue(a: number, config: Day15Config): number;
}

export interface Day15Config {
    factor: number;
    modulo: number;
}
