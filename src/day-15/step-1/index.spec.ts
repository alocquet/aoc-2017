import { expect } from 'chai';

import { Day15Step1 } from '.';

describe('day-15-s1', () => {
    let day = new Day15Step1();

    it('compare 16 lowest bits : 245556042 === 1431495498', () => {
        expect(day.compare16LowestBits(245556042, 1431495498)).to.be.equal(true);
    });
    it('compare 16 lowest bits : 1744312007 !== 137874439', () => {
        expect(day.compare16LowestBits(1744312007, 137874439)).to.be.equal(false);
    });
    it('exemple : 1 pair for 5 iterations', () => {
        expect(day.execute(65, 8921, 5)).to.be.equal(1);
    });
    it('exemple : 588 pairs for 40000000 iterations', function(done) {
        this.timeout(5000);
        expect(day.execute(65, 8921, 40000000)).to.be.equal(588);
        done();
    });
    it('input : 612 pairs for 40000000 iterations', function(done) {
        this.timeout(5000);
        expect(day.execute(722, 354, 40000000)).to.be.equal(612);
        done();
    });
});
