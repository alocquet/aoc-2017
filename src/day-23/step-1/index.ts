import { D23ExecutionContext, D23Ope, Day23 } from '..';

export class Day23Step1 extends Day23 {

    public execute(input: string): number {
        let instructions = input.split('\n').map((line) => super.create(line));
        let context = new D23ExecutionContext();
        let result = 0;
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].forEach((register) => context.registers.set(register, 0));
        do {
            let current = instructions[context.idx];
            if (current instanceof D23Ope && current.type === 'mul') {
                result++;
            }
            current.execute(context);
            context.idx++;
        } while (context.idx < instructions.length);
        return result;
    }

}
