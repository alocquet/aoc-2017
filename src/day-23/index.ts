import { Day } from '../day';

export abstract class Day23 extends Day<number> {

    private static regex = /(.+) (.+) (.+)/;

    private static instructions = {
        jnz: (a, b) => new D23Jnz(a, b),
        mul: (a, b) => new D23Ope(a, b, 'mul'),
        set: (a, b) => new D23Ope(a, b, 'set'),
        sub: (a, b) => new D23Ope(a, b, 'sub'),
    };

    public create(input: string): D23Instruction {
        let values = Day23.regex.exec(input);

        return Day23.instructions[values[1]](values[2], values[3]);
    }
}

export abstract class D23Instruction {
    public parseRegisterOrValue(input: string): string | number {
        let res = parseInt(input, 10);
        if (isNaN(res)) {
            return input;
        }
        return res;
    }
    public abstract execute(context: D23ExecutionContext): boolean;
    protected getValue(context: D23ExecutionContext, register: string | number): number {
        if (typeof register === 'number') {
            return register;
        }
        return context.registers.get(register);
    }
}

export class D23Ope extends D23Instruction {
    private static operations = {
        mul: (a, b) => a * b,
        set: (a, b) => b,
        sub: (a, b) => a - b,
    };

    public value: string | number;

    constructor(public register: string, value: string, public type: string) {
        super();
        this.value = super.parseRegisterOrValue(value);
    }

    public execute(context: D23ExecutionContext): boolean {
        context.registers.set(this.register, D23Ope.operations[this.type](
            context.registers.get(this.register), this.getValue(context, this.value)));
        return true;
    }
}

export class D23Jnz extends D23Instruction {
    public condition: string | number;
    public value: string | number;
    public type = 'jnz';

    constructor(condition: string, value: string) {
        super();
        this.condition = this.parseRegisterOrValue(condition);
        this.value = this.parseRegisterOrValue(value);
    }
    public execute(context: D23ExecutionContext): boolean {
        if (super.getValue(context, this.condition) !== 0) {
            context.idx += super.getValue(context, this.value) - 1;
        }
        return true;
    }
}

export class D23ExecutionContext {
    public registers = new Map<string, number>();
    public idx = 0;
}
