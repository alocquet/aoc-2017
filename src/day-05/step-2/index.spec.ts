import { expect } from 'chai';

import { Day5Step2 } from '.';

describe('day-05-s2', () => {
    let day = new Day5Step2();

    it('0 3 0 1 -3 give 10', () => {
        expect(day.execute('0\n3\n0\n1\n-3')).to.be.equal(10);
    });
    it('step 1 input produce 27763113.', (done) => {
        day.run('assets/day-05/input.txt').subscribe((result) => {
            expect(result).to.be.equal(27763113);
            done();
        });
    });
});
