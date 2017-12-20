import { Day } from '../day';

export abstract class Day20 extends Day<number> {

    public parse(input: string): D20Particle[] {
        return input.split('\n').map((line, idx) => new D20Particle(line, idx));
    }

}

export class D20Particle {
    public static regex = /p=<(.+),(.+),(.+)>, v=<(.+),(.+),(.+)>, a=<(.+),(.+),(.+)>/;
    public position: number[];
    public velocity: number[];
    public acceleration: number[];
    constructor(input: string, public id: number) {
        let values = D20Particle.regex.exec(input).slice(1).map((elt) => parseInt(elt, 10));
        this.position = values.slice(0, 3);
        this.velocity = values.slice(3, 6);
        this.acceleration = values.slice(6, 9);
    }

    public nextState(): void {
        for (let idx = 0; idx < this.position.length; idx++) {
            this.velocity[idx] += this.acceleration[idx];
            this.position[idx] += this.velocity[idx];
        }
    }

    public distanceFromOrigin(): number {
        return this.position.map((coord) => Math.abs(coord)).reduce((prev, curr) => prev + curr);
    }
}
