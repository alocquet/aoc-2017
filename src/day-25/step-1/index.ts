import { Day25 } from '..';

export class Day25Step1 extends Day25 {

    public execute(input: string): number {
        let machine = super.parse(input);
        let values = new Map<number, number>();
        let cursor = 0;
        for (let idx = 0; idx < machine.steps; idx++) {
            let stateBehavior = machine.instructions.get(machine.state);
            let instruction = stateBehavior.instructions.get(values.get(cursor) === undefined ? 0 : values.get(cursor));
            values.set(cursor, instruction.write);
            cursor += instruction.move;
            machine.state = instruction.next;
        }
        return Array.from(values.values()).reduce((a, b) => a + b);
    }

}
