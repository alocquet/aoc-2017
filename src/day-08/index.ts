import { Day } from '../day';

export abstract class Day8 extends Day<number> {

    public executeSteps(input: string): { max: number, finalMax: number } {
        let result: any = {};
        let instructions = input.split('\n').map((line) => new D8Instruction(line));
        let variables = new Map<string, number>();
        instructions.forEach((instr) => {
            if (instr.condition.isTrue(this.getValue(variables, instr.condition.variable))) {
                let newValue = this.getValue(variables, instr.variable) + instr.value;
                if (result.max === undefined || result.max < newValue) {
                    result.max = newValue;
                }
                variables.set(instr.variable, newValue);
            }
        });
        result.finalMax = Math.max.apply(Math.max, Array.from(variables.values()));
        return result;
    }

    public getValue(variables: Map<string, number>, name: string) {
        if (!variables.has(name)) {
            variables.set(name, 0);
            return 0;
        }
        return variables.get(name);
    }

}

export class D8Instruction {
    private static regex = /(\w+) (inc|dec) ([-\d]+) if (.*)/;
    public variable: string;
    public value: number;
    public condition: D8Condition;

    constructor(input: string) {
        let match = D8Instruction.regex.exec(input);
        this.variable = match[1];
        this.value = (match[2] === 'inc' ? 1 : -1) * parseInt(match[3], 10);
        this.condition = new D8Condition(match[4]);
    }
}

export class D8Condition {
    private static regex = /(\w+) (.+?) ([-\d]+)/;
    public variable: string;
    public operator: string;
    public value: number;

    constructor(input: string) {
        let match = D8Condition.regex.exec(input);
        this.variable = match[1];
        this.operator = match[2];
        this.value = parseInt(match[3], 10);
    }

    public isTrue(variableValue: number) {
        return eval(variableValue + this.operator + this.value);
    }
}
