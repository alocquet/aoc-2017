import { Observable } from 'rxjs/Observable';
import { Day } from '../day';

export abstract class Day16 extends Day<string> {

    public executeOneStep(state: string, instructions: D16Instruction[]): string {
        return instructions.reduce((expr, instr) => instr.execute(expr), state);
    }

    public generateInitialString(size: number) {
        return [...new Array(size - 1)]
            .reduce((expr, idx) => expr + String.fromCharCode(1 + expr.charCodeAt(expr.length - 1)), 'a');
    }

}

export type D16Instruction = D16Spin | D16Exchange | D16Partner;

export class D16InstructionFactory {
    public static create(input: string): D16Instruction {
        return D16Spin.parse(input) || D16Exchange.parse(input) || D16Partner.parse(input);
    }
}

export class D16Spin {
    public static parse(input: string): D16Spin {
        let values = D16Spin.regex.exec(input);
        return values && new D16Spin(parseInt(values[1], 10));
    }
    private static regex = /s(\d+)/;
    constructor(public factor: number) { }

    public execute(state: string): string {
        return state.substr(state.length - this.factor) + state.substr(0, state.length - this.factor);
    }
}

export class D16Exchange {
    public static parse(input: string): D16Exchange {
        let values = D16Exchange.regex.exec(input);
        return values && new D16Exchange(parseInt(values[1], 10), parseInt(values[2], 10));
    }
    private static regex = /x(\d+)\/(\d+)/;
    constructor(public idA: number, public idB: number) {
        if (idA > idB) {
            this.idA = idB;
            this.idB = idA;
        }
    }

    public execute(state: string): string {
        return state.substring(0, this.idA)
            + state.charAt(this.idB)
            + ((this.idA === this.idB - 1) ? '' : state.substring(this.idA + 1, this.idB))
            + state.charAt(this.idA)
            + state.substring(this.idB + 1);
    }
}

export class D16Partner {
    public static parse(input: string): D16Partner {
        let values = D16Partner.regex.exec(input);
        return values && new D16Partner(values[1], values[2]);
    }
    private static regex = /p(\w)\/(\w)/;
    constructor(public progA: string, public progB: string) { }

    public execute(state: string): string {
        return new D16Exchange(state.indexOf(this.progA), state.indexOf(this.progB)).execute(state);
    }
}
