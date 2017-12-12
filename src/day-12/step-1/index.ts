import { Day12 } from '..';

export class Day12Step1 extends Day12 {

    public execute(input: string): number {
        let nodesMap = this.parseNodes(input);
        return this.extractGroup(nodesMap, 0).length;
    }

}
