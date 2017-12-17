import { expect } from 'chai';

import { Day17Step1 } from '.';

describe('day-17-s1', () => {
    let day = new Day17Step1();

    it('In the eample, the result is 638.', () => {
        expect(day.execute(3)).to.be.equal(638);
    });
    it('With the input, the result is 1244.', () => {
        expect(day.execute(370)).to.be.equal(1244);
    });
});
