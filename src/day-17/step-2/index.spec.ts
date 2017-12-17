import { expect } from 'chai';

import { Day17Step2 } from '.';

describe('day-17-s2', () => {
    let day = new Day17Step2();

    it('With the input, the result is 11162912.', () => {
        expect(day.execute(370)).to.be.equal(11162912);
    });
});
