import { D18ExecutionContext, D18Instruction, D18Jgz, D18Operation, Day18 } from '..';

export class Day18Step1 extends Day18 {

    constructor() {
        super();
        this.parsers.push({
            construct: (values: string[]) => new D18S1Snd(D18S1Snd.parseRegisterOrValue(values[1])),
            regex: /snd (.+)/,
        });
        this.parsers.push({
            construct: (values: string[]) => new D18S1Rcv(D18S1Rcv.parseRegisterOrValue(values[1])),
            regex: /rcv (.+)/,
        });
    }

    public execute(input: string): number {
        let instructions = input.split('\n').map((line) => this.create(line));
        let context = new D18ExecutionContext();
        while (instructions[context.idx].execute(context)) {
            context.idx++;
        }
        return context.recoverSound;
    }

}

class D18S1Snd extends D18Instruction {
    constructor(public value: string | number) { super(); }

    public execute(context: D18ExecutionContext): boolean {
        context.sound = super.getValue(context, this.value);
        return true;
    }
}

class D18S1Rcv extends D18Instruction {
    constructor(public value: string | number) { super(); }

    public execute(context: D18ExecutionContext): boolean {
        let currentValue = super.getValue(context, this.value);
        if (currentValue !== 0) {
            context.recoverSound = context.sound;
            return false;
        }
        return true;
    }
}
