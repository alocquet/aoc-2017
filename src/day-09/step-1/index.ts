import { Day9 } from '..';

export class Day9Step1 extends Day9 {

    public execute(input: string): number {
        let stream = input.split('');
        stream = this.removeDeletedCharacters(stream);
        stream = this.removeGarbage(stream).stream;
        return this.countGroups(stream);
    }

    public countGroups(stream: string[]): number {
        let result = 0;
        let factor = 1;
        for (let char of stream) {
            if (char === '{') {
                result += factor++;
            } else if (char === '}') {
                factor--;
            }
        }
        return result;
    }
}
