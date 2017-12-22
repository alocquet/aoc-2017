import { D22Position, D22State, Day22 } from '..';

export class Day22Step2 extends Day22 {

    public execute(input: string, bursts = 10000000): number {
        return super.execute(input, bursts);
    }

    public executeStep(nodes: Map<string, D22State>, position: D22Position): boolean {
        let result = false;
        let coord = this.coordString(position.x, position.y);
        let dir = Day22.directions[position.dir];
        switch (nodes.get(coord)) {
            case undefined:
                position.dir = dir.left;
                nodes.set(coord, D22State.WEAKENED);
                break;
            case D22State.WEAKENED:
                nodes.set(coord, D22State.INFECTED);
                result = true;
                break;
            case D22State.INFECTED:
                position.dir = dir.right;
                nodes.set(coord, D22State.FLAGGED);
                break;
            case D22State.FLAGGED:
                position.dir = dir.reverse;
                nodes.delete(coord);
                break;
        }
        position.x += Day22.directions[position.dir].x;
        position.y += Day22.directions[position.dir].y;
        return result;
    }

}
