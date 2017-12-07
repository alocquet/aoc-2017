import { Day } from '../day';

export abstract class Day7 extends Day<string | number> {

    public parseTree(input: string): D7Tree {
        let tree = new D7Tree();
        tree.nodes = input.split('\n').map((line) => new D7Node(line));
        tree.nodes.forEach((node) => tree.nodesMap.set(node.id, node));
        tree.nodes.forEach((node) => {
            node.next = node.nextStr ? node.nextStr.split(', ').map((next) => tree.nodesMap.get(next)) : [];
            node.next.forEach((next) => tree.nodesMap.get(next.id).prev.push(node));
        });
        tree.root = tree.nodes.find((node) => node.prev.length === 0);
        return tree;
    }

}

export class D7Tree {
    public nodes: D7Node[];
    public nodesMap = new Map<string, D7Node>();
    public root: D7Node;
}

export class D7Node {
    private static regex = /(\w+)\s+\((\d+)\)(?:\s->\s+(.+))?/;

    public id: string;
    public weight: number;
    public nextStr: string;
    public next: D7Node[] = [];
    public prev: D7Node[] = [];

    constructor(input: string) {
        let result = D7Node.regex.exec(input);
        this.id = result[1];
        this.weight = parseInt(result[2], 10);
        this.nextStr = result[3];
    }
}
