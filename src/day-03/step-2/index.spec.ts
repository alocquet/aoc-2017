import { expect } from 'chai';

import { Day3Step2 } from '.';

describe('day-03-s2', () => {
    const day = new Day3Step2();

    it('10 is the first value upper than 8.', () => {
        expect(day.execute(8)).to.be.equal(10);
    });
    it('with input 312051, result is 312453.', () => {
        expect(day.execute(312051)).to.be.equal(312453);
    });
});
