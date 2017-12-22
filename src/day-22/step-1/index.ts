import { D22Position, D22State, Day22 } from '..';

export class Day22Step1 extends Day22 {

    public executeStep(nodes: Map<string, D22State>, position: D22Position): boolean {
        let result = false;
        let coord = this.coordString(position.x, position.y);
        let dir = Day22.directions[position.dir];
        if (nodes.has(coord)) {
            position.dir = dir.right;
            nodes.delete(coord);
        } else {
            position.dir = dir.left;
            nodes.set(coord, D22State.INFECTED);
            result = true;
        }
        position.x += Day22.directions[position.dir].x;
        position.y += Day22.directions[position.dir].y;
        return result;
    }

}
