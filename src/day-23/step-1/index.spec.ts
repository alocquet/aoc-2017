import { expect } from 'chai';

import { Day23Step1 } from '.';

describe('day-23-s1', () => {
    let day = new Day23Step1();

    it('With input, mul is executed 9409 times.', (done) => {
            day.run('assets/day-23/input.txt').subscribe((result) => {
                expect(result).to.be.equal(9409);
                done();
            });
        });
});
