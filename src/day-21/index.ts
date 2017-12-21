import { Day } from '../day';

export abstract class Day21 extends Day<number> {

    public execute(input: string, steps = 5): number {
        let state = '.#./..#/###';
        let patterns = this.parse(input);
        let patternsMap = new Map<string, D21Pattern>();
        patterns.forEach((pattern) =>
            pattern.from.forEach((from) =>
                patternsMap.set(from, pattern)));

        for (let step = 0; step < steps; step++) {
            let grid = new D21Grid(state);
            let size = (grid.size % 2 === 0) ? 2 : 3;
            let newGrid = new D21Grid();
            for (let y = 0; y < grid.size / size; y++) {
                for (let x = 0; x < grid.size / size; x++) {
                    let subGrid = grid.sub(x, y, size);
                    let pattern = patternsMap.get(subGrid.toString());
                    newGrid.push(x, y, pattern.to);
                }
            }
            state = newGrid.toString();
        }

        return state.split('').filter((char) => char === '#').length;
    }

    public parse(input: string): D21Pattern[] {
        return input.split('\n').map((line, idx) => new D21Pattern(line));
    }

}

export class D21Grid {
    public content: string[][] = [];

    constructor(input?: string) {
        if (input) {
            this.content = this.extractMatrix(input);
        }
    }

    public get size() {
        return this.content.length;
    }

    public get(x: number, y: number): string {
        return this.content[y][x];
    }

    public set(x: number, y: number, value: string): void {
        if (this.content[y] === undefined) {
            this.content[y] = [];
        }
        this.content[y][x] = value;
    }

    public toString(): string {
        return this.content.map((line) => line.join('')).join('/');
    }

    public sub(x: number, y: number, size: number): D21Grid {
        let result = new D21Grid();
        result.content = this.content
            .slice(y * size, y * size + size)
            .map((line) => line.slice(x * size, x * size + size));
        return result;
    }

    public push(coordX: number, coordY: number, block: D21Grid) {
        for (let y = 0; y < block.size; y++) {
            for (let x = 0; x < block.size; x++) {
                this.set(block.size * coordX + x, block.size * coordY + y, block.get(x, y));
            }
        }
    }

    private extractMatrix(input: string) {
        return input.split('/').map((line) => line.split(''));
    }
}

export class D21Pattern {
    private static regex = /(.*) => (.*)/;

    public from: string[];
    public to: D21Grid;

    constructor(input: string) {
        let values = D21Pattern.regex.exec(input);
        this.from = this.extractAllRotations(new D21Grid(values[1]));
        this.to = new D21Grid(values[2]);
    }

    private extractAllRotations(matrix: D21Grid): string[] {
        let rotations = [matrix, new D21Grid(), new D21Grid(), new D21Grid()];
        let size = matrix.size;

        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                rotations[1].set(x, y, matrix.get(y, size - 1 - x));
                rotations[2].set(x, y, matrix.get(size - 1 - x, size - 1 - y));
                rotations[3].set(x, y, matrix.get(size - 1 - y, x));
            }
        }

        let flips = [new D21Grid(), new D21Grid(), new D21Grid(), new D21Grid()
            , new D21Grid(), new D21Grid(), new D21Grid(), new D21Grid()];
        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                flips[0].set(x, y, rotations[0].get(size - 1 - x, y));
                flips[1].set(x, y, rotations[1].get(size - 1 - x, y));
                flips[2].set(x, y, rotations[2].get(size - 1 - x, y));
                flips[3].set(x, y, rotations[3].get(size - 1 - x, y));
                flips[4].set(x, y, rotations[0].get(x, size - 1 - y));
                flips[5].set(x, y, rotations[1].get(x, size - 1 - y));
                flips[6].set(x, y, rotations[2].get(x, size - 1 - y));
                flips[7].set(x, y, rotations[3].get(x, size - 1 - y));
            }
        }

        return [...rotations, ...flips].map((result) => result.toString());
    }
}
