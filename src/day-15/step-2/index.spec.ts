import { expect } from 'chai';

import { Day15Step2 } from '.';

describe('day-15-s2', () => {
    let day = new Day15Step2();

    it('exemple : 309 pairs for 5000000 iterations', function(done) {
        this.timeout(5000);
        expect(day.execute(65, 8921, 5000000)).to.be.equal(309);
        done();
    });
    it('input : 285 pairs for 5000000 iterations', function(done) {
        this.timeout(5000);
        expect(day.execute(722, 354, 5000000)).to.be.equal(285);
        done();
    });
});
