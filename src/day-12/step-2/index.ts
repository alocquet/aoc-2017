import { Day12 } from '..';

export class Day12Step2 extends Day12 {

    public execute(input: string): number {
        let nodesMap = this.parseNodes(input);
        let groups = 0;
        while (nodesMap.size > 0) {
            groups++;
            let group = this.extractGroup(nodesMap, nodesMap.keys().next().value);
            group.forEach((node) => nodesMap.delete(node));
        }
        return groups;
    }

}
