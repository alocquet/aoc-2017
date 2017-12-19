import { Day19 } from '..';

export class Day19Step1 extends Day19 {

    public execute(input: string): string {
        return super.followPath(input).phrase;
    }

}
