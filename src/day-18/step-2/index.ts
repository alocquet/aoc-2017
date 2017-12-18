import { D18ExecutionContext, D18Instruction, D18Jgz, D18Operation, Day18 } from '..';

export class Day18Step2 extends Day18 {

    constructor() {
        super();
        this.parsers.push({
            construct: (values: string[]) => new D18S2Snd(D18S2Snd.parseRegisterOrValue(values[1])),
            regex: /snd (.+)/,
        });
        this.parsers.push({
            construct: (values: string[]) => new D18S2Rcv(values[1]),
            regex: /rcv (.+)/,
        });
    }

    public execute(input: string): number {
        let instructions = input.split('\n').map((line) => this.create(line));
        let context1 = new D18ExecutionContext();
        let context2 = new D18ExecutionContext();
        context1.send = context2.receive;
        context2.send = context1.receive;
        context2.registers.set('p', 0);
        context1.registers.set('p', 1);
        let currentContext = context1;
        while (this.executeProg(instructions, context1) || this.executeProg(instructions, context2)) {
            // nothing to do
        }
        return context1.sendCount;
    }

    public executeProg(instructions: D18Instruction[], context: D18ExecutionContext): boolean {
        let result = false;
        while (context.idx < instructions.length && instructions[context.idx].execute(context) !== false) {
            context.idx++;
            result = true;
        }
        return result;
    }
}

class D18S2Snd extends D18Instruction {
    constructor(public value: string | number) { super(); }
    public execute(context: D18ExecutionContext): boolean {
        context.send.push(super.getValue(context, this.value));
        context.sendCount++;
        return true;
    }
}

class D18S2Rcv extends D18Instruction {
    constructor(public register: string) { super(); }
    public execute(context: D18ExecutionContext) {
        if (context.receive.length > 0) {
            context.registers.set(this.register, context.receive.shift());
            return true;
        }
        return false;
    }
}
