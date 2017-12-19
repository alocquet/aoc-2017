import { Day19 } from '..';

export class Day19Step2 extends Day19 {

    public execute(input: string): number {
        return super.followPath(input).steps;
    }

}
