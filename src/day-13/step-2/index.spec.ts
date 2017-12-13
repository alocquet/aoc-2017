import { expect } from 'chai';

import { Day13Step2 } from '.';

describe('day-13-s2', () => {
    let day = new Day13Step2();

    it('In the example above, we need to wait 10 picoseconds.', () => {
        expect(day.execute(`0: 3
1: 2
4: 4
6: 4`)).to.be.equal(10);
    });
    it('step 1 input produce 3913186.', function(done) {
        this.timeout(20000);
        day.run('assets/day-13/input.txt').subscribe((result) => {
            expect(result).to.be.equal(3913186);
            done();
        });
    });
});
