import { expect } from 'chai';

import { Day3Step1 } from '.';

describe('day-03-s1', () => {
    const day = new Day3Step1();

    it('Data from square 1 is carried 0 steps, since it\'s at the access port.', () => {
        expect(day.execute(1)).to.be.equal(0);
    });
    it('Data from square 12 is carried 3 steps, such as: down, left, left.', () => {
        expect(day.execute(12)).to.be.equal(3);
    });
    it('Data from square 23 is carried only 2 steps: up twice.', () => {
        expect(day.execute(23)).to.be.equal(2);
    });
    it('Data from square 1024 must be carried 31 steps.', () => {
        expect(day.execute(1024)).to.be.equal(31);
    });
    it('with input 312051, result is 430.', () => {
        expect(day.execute(312051)).to.be.equal(430);
    });
});
