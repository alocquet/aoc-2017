import { Day14 } from '..';

export class Day14Step2 extends Day14 {

    public execute(input: string): number {
        let disk = this.getDisk(input);
        let nodes = new Map<string, number>();
        let groups = new Map<number, string[]>();
        let idGroup = 0;
        for (let y = 0; y < disk.length; y++) {
            for (let x = 0; x < disk[y].length; x++) {
                let cell = disk[y][x];
                if (cell === '1') {
                    let inGroups = this.getGroupIds(nodes, x, y);
                    if (inGroups.size === 0) {
                        // no groups : create a new groupe
                        groups.set(idGroup, [this.stringRepresentation(x, y)]);
                        nodes.set(this.stringRepresentation(x, y), idGroup++);
                    } else {
                        let keepGroupId;
                        // join groups
                        for (let groupId of inGroups) {
                            if (keepGroupId === undefined) {
                                // keep first id to merge others groups in
                                keepGroupId = groupId;
                                continue;
                            }
                            // merge group in first group
                            for (let node of groups.get(groupId)) {
                                nodes.set(node, keepGroupId);
                            }
                            [].push.apply(groups.get(keepGroupId), groups.get(groupId));
                            groups.delete(groupId);
                        }
                        // add x,y to group
                        nodes.set(this.stringRepresentation(x, y), keepGroupId);
                        groups.get(keepGroupId).push(this.stringRepresentation(x, y));
                    }
                }
            }
        }
        return groups.size;
    }

    /**
     * get ids of groups where x,y is. ids are sorted desc.
     */
    public getGroupIds(nodes: Map<string, number>, x: number, y: number): Set<number> {
        return new Set(this.getNeightboors(x, y)
            .filter((neightboor) => nodes.has(neightboor))
            .map((neightboor) => nodes.get(neightboor)));
    }

    public getNeightboors(x: number, y: number): string[] {
        let res = [];
        res.push(this.stringRepresentation(x - 1, y));
        res.push(this.stringRepresentation(x + 1, y));
        res.push(this.stringRepresentation(x, y - 1));
        res.push(this.stringRepresentation(x, y + 1));
        return res;
    }

    public stringRepresentation(x: number, y: number): string {
        return x + ',' + y;
    }

}
