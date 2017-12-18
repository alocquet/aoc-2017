import { D18ExecutionContext, D18Instruction, D18Jgz, D18Operation, Day18 } from '..';

export class Day18Step2 extends Day18 {

    public execute(input: string): number {
        let instructions = input.split('\n').map((line) => this.create(line));
        let context1 = new D18ExecutionContext();
        let context2 = new D18ExecutionContext();
        context1.send = context2.receive;
        context2.send = context1.receive;
        context1.registers.set('p', 0);
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

    public create(input: string): D18Instruction {
        return D18Snd.parse(input) || D18Operation.parse(input) || D18Rcv.parse(input) || D18Jgz.parse(input);
    }
}

class D18Snd extends D18Instruction {
    public static parse(input: string): D18Snd {
        let values = D18Snd.regex.exec(input);
        return values && new D18Snd(D18Snd.parseRegisterOrValue(values[1]));
    }
    private static regex = /snd (.+)/;
    constructor(public value: string | number) { super(); }

    public execute(context: D18ExecutionContext): boolean {
        context.send.push(super.getValue(context, this.value));
        context.sendCount++;
        return true;
    }
}

class D18Rcv extends D18Instruction {
    public static parse(input: string): D18Rcv {
        let values = D18Rcv.regex.exec(input);
        return values && new D18Rcv(values[1]);
    }
    private static regex = /rcv (.+)/;
    constructor(public register: string) { super(); }

    public execute(context: D18ExecutionContext) {
        if (context.receive.length > 0) {
            context.registers.set(this.register, context.receive.shift());
            return true;
        }
        return false;
    }
}
