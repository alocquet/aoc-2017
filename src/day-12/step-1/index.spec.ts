import { expect } from 'chai';

import { Day12Step1 } from '.';

describe('day-12-s1', () => {
    let day = new Day12Step1();

    it('a total of 6 programs are in exemple group.', () => {
        expect(day.execute(`0 <-> 2
1 <-> 1
2 <-> 0, 3, 4
3 <-> 2, 4
4 <-> 2, 3, 6
5 <-> 6
6 <-> 4, 5`)).to.be.equal(6);
    });
    it('step 1 input produce 152.', (done) => {
        day.run('assets/day-12/input.txt').subscribe((result) => {
            expect(result).to.be.equal(152);
            done();
        });
    });
});
