import { Day14 } from '..';

export class Day14Step2 extends Day14 {

    public execute(input: string): number {
        let disk = this.getDisk(input);
        let groups: string[][] = [];
        for (let y = 0; y < disk.length; y++) {
            for (let x = 0; x < disk[y].length; x++) {
                let cell = disk[y][x];
                if (cell === '1') {
                    let inGroups = this.getGroupIds(groups, x, y);
                    if (inGroups.length === 0) {
                        // no groups : create a new groupe
                        groups.push([this.stringRepresentation(x, y)]);
                    } else {
                        let keepGroupId = inGroups.shift();
                        // join groups
                        for (let groupId of inGroups.reverse()) {
                            [].push.apply(groups[keepGroupId], groups[groupId]);
                            groups.splice(groupId, 1);
                        }
                        // add x,y to group
                        groups[keepGroupId].push(this.stringRepresentation(x, y));
                    }
                }
            }
        }
        return groups.length;
    }

    /**
     * get ids of groups where x,y is.
     */
    public getGroupIds(groups: string[][], x: number, y: number): number[] {
        let result = [];
        for (let groupId = 0; groupId < groups.length; groupId++) {
            let neightboorInGroup = this.getNeightboors(x, y)
                .find((neightboor) => groups[groupId].indexOf(neightboor) !== -1);
            if (neightboorInGroup !== undefined) {
                result.push(groupId);
            }
        }
        return result;
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
