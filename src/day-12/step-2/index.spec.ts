import { expect } from 'chai';

import { Day12Step2 } from '.';

describe('day-12-s2', () => {
    let day = new Day12Step2();

    it('In the example above, there were 2 groups.', () => {
        expect(day.execute(`0 <-> 2
    1 <-> 1
    2 <-> 0, 3, 4
    3 <-> 2, 4
    4 <-> 2, 3, 6
    5 <-> 6
    6 <-> 4, 5`)).to.be.equal(2);
    });
    it('step 1 input produce 186.', (done) => {
        day.run('assets/day-12/input.txt').subscribe((result) => {
            expect(result).to.be.equal(186);
            done();
        });
    });

});
