import { Day7 } from '..';

export class Day7Step1 extends Day7 {

    public execute(input: string): string {
        return this.parseTree(input).root.id;
    }

}
