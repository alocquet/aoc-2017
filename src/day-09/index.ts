import { Day } from '../day';

export abstract class Day9 extends Day<number> {

    public removeDeletedCharacters(stream: string[]) {
        let result = [];
        for (let idx = 0; idx < stream.length; idx++) {
            if (stream[idx] === '!') {
                idx++;
            } else {
                result.push(stream[idx]);
            }
        }
        return result;
    }

    public removeGarbage(stream: string[]): { stream: string[], deleted: number } {
        let result = { stream: [], deleted: 0 };
        for (let idx = 0; idx < stream.length; idx++) {
            if (stream[idx] === '<') {
                let newIdx = stream.indexOf('>', idx);
                result.deleted += newIdx - idx - 1;
                idx = newIdx;
            } else {
                result.stream.push(stream[idx]);
            }
        }
        return result;
    }

}
