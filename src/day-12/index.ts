import { Day } from '../day';

export abstract class Day12 extends Day<number> {

    public extractGroup(nodes: Map<number, D12Node>, firstNode: number): number[] {
        let queue = [firstNode];
        let visited = [];
        while (queue.length > 0) {
            let node = queue.shift();
            let nextNodes = nodes.get(node).next
                .map((next) => next.id)
                .filter((next) => visited.indexOf(next) === -1);
            queue = [...queue, ...nextNodes];
            visited = [...visited, ...nextNodes];
        }
        return visited;
    }

    public parseNodes(input: string): Map<number, D12Node> {
        let nodesMap = new Map<number, D12Node>();
        input.split('\n').map((line) => {
            let node = new D12Node(line);
            nodesMap.set(node.id, node);
            return node;
        }).forEach((node) => {
            node.next = node.nextStr.split(', ').map((str) => nodesMap.get(parseInt(str, 10)));
        });
        return nodesMap;
    }

}

export class D12Node {
    private static regex = /(.*) <-> (.*)/;
    public id: number;
    public nextStr: string;
    public next: D12Node[];

    constructor(input: string) {
        let values = D12Node.regex.exec(input);
        this.id = parseInt(values[1], 10);
        this.nextStr = values[2];
    }
}
