import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Day } from '../day';

export abstract class Day18 extends Day<number> {

}

export abstract class D18Instruction {
    public static parseRegisterOrValue(input: string): string | number {
        let res = parseInt(input, 10);
        if (isNaN(res)) {
            return input;
        }
        return res;
    }
    public abstract execute(context: D18ExecutionContext): boolean;
    protected getValue(context: D18ExecutionContext, register: string | number): number {
        if (typeof register === 'number') {
            return register;
        }
        return context.registers.get(register);
    }
}

export class D18Operation extends D18Instruction {
    public static parse(input: string): D18Operation {
        let values = D18Operation.regex.exec(input);
        return values &&
            new D18Operation(values[2],
                D18Instruction.parseRegisterOrValue(values[3]),
                D18Operation.operations[values[1]]);
    }
    private static regex = /(set|add|mul|mod) (.+) (.+)/;
    private static operations = {
        add: (x, y) => x + y,
        mod: (x, y) => x % y,
        mul: (x, y) => x * y,
        set: (x, y) => y,
    };

    constructor(public register: string, public value: string | number, public operation: (x, y) => number) { super(); }

    public execute(context: D18ExecutionContext): boolean {
        context.registers.set(this.register,
            this.operation(context.registers.get(this.register), super.getValue(context, this.value)));
        return true;
    }
}

export class D18Jgz extends D18Instruction {
    public static parse(input: string): D18Jgz {
        let values = D18Jgz.regex.exec(input);
        return values && new D18Jgz(D18Jgz.parseRegisterOrValue(values[1])
            , D18Jgz.parseRegisterOrValue(values[2]));
    }
    private static regex = /jgz (.+) (.+)/;
    constructor(public condition: string | number, public value: string | number) { super(); }

    public execute(context: D18ExecutionContext): boolean {
        if (super.getValue(context, this.condition) > 0) {
            context.idx += super.getValue(context, this.value) - 1;
        }
        return true;
    }
}

export class D18ExecutionContext {
    public registers = new Map<string, number>();
    public idx = 0;
    public sound: number;
    public recoverSound: number;
    public send = [];
    public sendCount = 0;
    public receive = [];
}
