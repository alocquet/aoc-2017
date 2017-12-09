import { Day9 } from '..';

export class Day9Step2 extends Day9 {

    public execute(input: string): number {
        let stream = input.split('');
        stream = this.removeDeletedCharacters(stream);
        return this.removeGarbage(stream).deleted;
    }

}
