import { Day4 } from '..';

export class Day4Step2 extends Day4 {

    valid(line: string): boolean {
        // order pass words and use algo from step 1
        let orderedPasswords = line.split(' ').map(word => word.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('')).join(' ');
        return super.valid(orderedPasswords);
    }
}