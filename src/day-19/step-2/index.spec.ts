import { expect } from 'chai';

import { Day19Step2 } from '.';

describe('day-19-s2', () => {
    let day = new Day19Step2();

    it('In the example, there are 38 steps.', () => {
        expect(day.execute(
            '     |          \n' +
            '     |  +--+    \n' +
            '     A  |  C    \n' +
            ' F---|----E|--+ \n' +
            '     |  |  |  D \n' +
            '     +B-+  +--+ \n')).to.be.equal(38);
    });
    it('With the input, there are 16328 steps.', (done) => {
        day.run('assets/day-19/input.txt').subscribe((result) => {
            expect(result).to.be.equal(16328);
            done();
        });
    });
});
