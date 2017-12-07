import { D7Node, Day7 } from '..';

export class Day7Step2 extends Day7 {

    public execute(input: string): number {
        let tree = this.parseTree(input);
        return this.getNewWeightForBalance(tree.root);
    }

    public getStackWeight(node: D7Node) {
        return node.next.reduce((weight, child) => weight + this.getStackWeight(child), node.weight);
    }

    public getNewWeightForBalance(node: D7Node): number {
        let previousStackWeight;
        let previous;
        for (let child of node.next) {
            let newWeight = this.getNewWeightForBalance(child);
            if (newWeight) {
                return newWeight;
            }
            let stackWeight = this.getStackWeight(child);
            if (previousStackWeight && previousStackWeight !== stackWeight) {
                if (previousStackWeight > stackWeight) {
                    return previous.weight - previousStackWeight + stackWeight;
                }
                return child.weight - stackWeight + previousStackWeight;
            }
            previousStackWeight = stackWeight;
            previous = child;
        }
        return undefined;
    }

}
