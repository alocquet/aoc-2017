import { expect } from 'chai';

import { Day19Step1 } from '.';

describe('day-19-s1', () => {
    let day = new Day19Step1();

    it('In the example, following the path to the end, the letters it sees on its path are ABCDEF.', () => {
        expect(day.execute(
            '     |          \n' +
            '     |  +--+    \n' +
            '     A  |  C    \n' +
            ' F---|----E|--+ \n' +
            '     |  |  |  D \n' +
            '     +B-+  +--+ \n')).to.be.equal('ABCDEF');
    });
    it('With the input, the letters are KGPTMEJVS.', (done) => {
        day.run('assets/day-19/input.txt').subscribe((result) => {
            expect(result).to.be.equal('KGPTMEJVS');
            done();
        });
    });
});
