import { D18ExecutionContext, D18Instruction, D18Jgz, D18Operation, Day18 } from '..';

export class Day18Step1 extends Day18 {

    public execute(input: string): number {
        let instructions = input.split('\n').map((line) => this.create(line));
        let context = new D18ExecutionContext();
        while (instructions[context.idx].execute(context)) {
            context.idx++;
        }
        return context.recoverSound;
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
        context.sound = super.getValue(context, this.value);
        return true;
    }
}

class D18Rcv extends D18Instruction {
    public static parse(input: string): D18Rcv {
        let values = D18Rcv.regex.exec(input);
        return values && new D18Rcv(D18Rcv.parseRegisterOrValue(values[1]));
    }
    private static regex = /rcv (.+)/;
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
