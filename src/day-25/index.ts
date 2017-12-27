import { Day } from '../day';

export abstract class Day25 extends Day<number> {

    public parse(input: string): D25TuringMachine {
        let result = new D25TuringMachine();
        let lines = input.split('\n');
        result.state = /Begin in state (.*)./.exec(lines.shift())[1];
        result.steps = parseInt(/Perform a diagnostic checksum after (.*) steps./.exec(lines.shift())[1], 10);

        for (let idx = 0; idx < lines.length / 10; idx++) {
            let instruction = new D25StateBehavior(lines.slice(idx * 10 + 1, (idx + 1) * 10));
            result.instructions.set(instruction.state, instruction);
        }
        return result;
    }

}

export class D25TuringMachine {
    public state: string;
    public steps: number;
    public instructions = new Map<string, D25StateBehavior>();
}

export class D25StateBehavior {
    public state: string;
    public instructions = new Map<number, D25Instruction>();

    constructor(lines: string[]) {
        this.state = /In state (.*):/.exec(lines[0])[1];
        this.instructions.set(0, new D25Instruction(lines.slice(2, 5)));
        this.instructions.set(1, new D25Instruction(lines.slice(6, 9)));
    }
}

export class D25Instruction {
    public write: number;
    public move: number;
    public next: string;
    constructor(lines: string[]) {
        this.write = parseInt(/\s*- Write the value (.*)\./.exec(lines[0])[1], 10);
        this.move = /\s*- Move one slot to the (left|right)\./.exec(lines[1])[1] === 'left' ? -1 : 1;
        this.next = /\s*- Continue with state (.*)\./.exec(lines[2])[1];
    }
}
