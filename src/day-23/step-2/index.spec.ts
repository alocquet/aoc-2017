import { expect } from 'chai';

import { Day23Step2 } from '.';

describe('day-23-s2', () => {
    let day = new Day23Step2();

    it('With input, the result is 913.', (done) => {
        day.run('assets/day-23/input.txt').subscribe((result) => {
            expect(result).to.be.equal(913);
            done();
        });
    });

});
