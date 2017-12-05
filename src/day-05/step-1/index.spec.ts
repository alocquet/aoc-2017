import { expect } from 'chai';

import { Day5Step1 } from '.';

describe('day-05-s1', () => {
    const day = new Day5Step1();

    it('0 3 0 1 -3 give 5', () => {
        expect(day.execute('0\n3\n0\n1\n-3')).to.be.equal(5);
    });
    it('step 1 input produce 388611.', (done) => {
        day.run('assets/day-05/input.txt').subscribe((result) => {
            expect(result).to.be.equal(388611);
            done();
        });
    });
});
