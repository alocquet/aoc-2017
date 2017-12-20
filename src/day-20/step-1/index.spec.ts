import { expect } from 'chai';

import { Day20Step1 } from '.';

describe('day-20-s1', () => {
    let day = new Day20Step1();

    it('In the example, in the long run, particle 0 will stay closest.', () => {
        expect(day.execute(
            `p=<3,0,0>, v=<2,0,0>, a=<-1,0,0>
p=<4,0,0>, v=<0,0,0>, a=<-2,0,0>`)).to.be.equal(0);
    });
    it('With the input, the result is particle 243.', (done) => {
        day.run('assets/day-20/input.txt').subscribe((result) => {
            expect(result).to.be.equal(243);
            done();
        });
    });
});
