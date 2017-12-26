import { D23ExecutionContext, Day23 } from '..';

export class Day23Step2 extends Day23 {

    public execute(input: string): number {
        let h = 0;
        let b = 99 * 100 + 100000;
        let c = b + 17000;

        for (let idx = b; idx <= c; idx += 17) {
            for (let j = 2; j < idx; j++) {
                if (idx % j === 0) {
                    h++;
                    break;
                }
            }
        }
        return h;
    }

}
