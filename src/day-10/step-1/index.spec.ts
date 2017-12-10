import { expect } from 'chai';

import { Day10Step1 } from '.';

describe('day-10-s1', () => {
    let day = new Day10Step1();

    it('0, 1, 2, 3, 4, and were given input lengths of 3, 4, 1, 5, give 12', () => {
        expect(day.execute(5, '3,4,1,5')).to.be.equal(12);
    });
    it('step 1 input produce 2928.', () => {
        // setTimeout(5000);
        expect(day.execute(256, '230,1,2,221,97,252,168,169,57,99,0,254,181,255,235,167')).to.be.equal(2928);
    });
});
