import { expect } from 'chai';

import { Day8Step2 } from '.';

describe('day-08-s2', () => {
    let day = new Day8Step2();

    it('test give result 10', () => {
        expect(day.execute(`b inc 5 if a > 1
        a inc 1 if b < 5
        c dec -10 if a >= 1
        c inc -20 if c == 10`)).to.be.equal(10);
    });
    it('step 2 input produce 6209.', (done) => {
        day.run('assets/day-08/input.txt').subscribe((result) => {
            expect(result).to.be.equal(6209);
            done();
        });
    });
});
