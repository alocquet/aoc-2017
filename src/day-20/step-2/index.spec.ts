import { expect } from 'chai';

import { Day20Step2 } from '.';

describe('day-20-s2', () => {
    let day = new Day20Step2();

    it('In the example, there is only one particle after collisions.', () => {
        expect(day.execute(
            `p=<-6,0,0>, v=< 3,0,0>, a=< 0,0,0>
p=<-4,0,0>, v=< 2,0,0>, a=< 0,0,0>
p=<-2,0,0>, v=< 1,0,0>, a=< 0,0,0>
p=< 3,0,0>, v=<-1,0,0>, a=< 0,0,0>`)).to.be.equal(1);
    });
    it('With the input, there are 648 particles after collisions.', (done) => {
        day.run('assets/day-20/input.txt').subscribe((result) => {
            expect(result).to.be.equal(648);
            done();
        });
    });
});
