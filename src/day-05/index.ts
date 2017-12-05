import { Day } from '../day';

export abstract class Day5 extends Day<number> {

    public execute(input: string): number {
        let instructions = input.split('\n').map((val) => parseInt(val, 10));
        let steps = 0;
        for (let cursor = 0; cursor < instructions.length;) {
            let currentOperation = instructions[cursor];
            instructions[cursor] = this.nextOperationValue(currentOperation);
            cursor += currentOperation;
            steps++;
        }
        return steps;
    }

    public abstract nextOperationValue(value: number): number;

}
