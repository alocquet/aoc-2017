import { Day } from '../day';

export abstract class Day22 extends Day<number> {

    protected static directions = {
        d: { x: 0, y: 1, left: 'r', right: 'l', reverse: 'u' },
        l: { x: -1, y: 0, left: 'd', right: 'u', reverse: 'r' },
        r: { x: 1, y: 0, left: 'u', right: 'd', reverse: 'l' },
        u: { x: 0, y: -1, left: 'l', right: 'r', reverse: 'd' },
    };

    public execute(input: string, bursts = 10000): number {
        let infectedNodes = this.parse(input);
        let state = { x: 0, y: 0, dir: 'u' };
        let infections = 0;
        for (let burst = 0; burst < bursts; burst++) {
            if (this.executeStep(infectedNodes, state)) {
                infections++;
            }
        }
        return infections;
    }

    /**
     * execute one step
     * @param nodes nodes states
     * @param position current position
     * @return true if a node has been infected
     */
    public abstract executeStep(nodes: Map<string, D22State>, position: D22Position): boolean;

    public coordString(x: number, y: number) {
        return `${x};${y}`;
    }

    public parse(input: string): Map<string, D22State> {
        let result = new Map<string, D22State>();
        input.split('\n').forEach((line, y) => {
            let middle = Math.floor(line.length / 2);
            line.split('').forEach((cell, x) => {
                if (cell === '#') {
                    result.set(this.coordString(x - middle, y - middle), D22State.INFECTED);
                }
            });
        });
        return result;
    }
}

export enum D22State {
    WEAKENED,
    INFECTED,
    FLAGGED,
}

export interface D22Position {
    x: number;
    y: number;
    dir: string;
}
