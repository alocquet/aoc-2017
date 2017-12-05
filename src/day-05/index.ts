import { Day } from "../day";

export abstract class Day5 extends Day<number> {

    execute(input: string): number {
        let instructions = input.split('\n').map(val => parseInt(val));
        let steps = 0;
        for (let cursor = 0; cursor < instructions.length;) {
            let currentOperation = instructions[cursor];
            instructions[cursor] = this.nextOperationValue(currentOperation);
            cursor += currentOperation;
            steps++;
        }
        return steps;
    }

    abstract nextOperationValue(value: number): number;

}