import { D16InstructionFactory, Day16 } from '..';

export class Day16Step1 extends Day16 {

    public execute(input: string, size = 16): string {
        return super.executeOneStep(this.generateInitialString(size),
            input.split(',')
                .map((line) => D16InstructionFactory.create(line)));
    }

}
