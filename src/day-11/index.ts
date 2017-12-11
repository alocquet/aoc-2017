import { Day } from '../day';

export abstract class Day11 extends Day<number> {

    public static factors = {
        n: { x: 0, y: 1, z: -1 },
        ne: { x: 1, y: 0, z: -1 },
        nw: { x: -1, y: 1, z: 0 },
        s: { x: 0, y: -1, z: 1 },
        se: { x: 1, y: -1, z: 0 },
        sw: { x: -1, y: 0, z: 1 },
    };

    public executeSteps(input: string): { last: number, max: number } {
        let maxDist = 0;
        let position = input.split(',').reduce((pos, dir) => {
            pos.x += Day11.factors[dir].x;
            pos.y += Day11.factors[dir].y;
            pos.z += Day11.factors[dir].z;
            maxDist = Math.max(maxDist, this.computeDist(pos));
            return pos;
        }, new Position());
        return { last: this.computeDist(position), max: maxDist };
    }

    public computeDist(position: Position): number {
        return (Math.abs(position.x) + Math.abs(position.y) + Math.abs(position.z)) / 2;
    }

}

export class Position {
    public x = 0;
    public y = 0;
    public z = 0;
}
