import { expect } from 'chai';

import { Day21Step2 } from '.';

describe('day-21-s2', () => {
    let day = new Day21Step2();

    it('With the input, after 18 steps, the result is particle 3018423.', function(done) {
        this.timeout(5000);
        day.run('assets/day-21/input.txt').subscribe((result) => {
            expect(result).to.be.equal(3018423);
            done();
        });
    });

});
