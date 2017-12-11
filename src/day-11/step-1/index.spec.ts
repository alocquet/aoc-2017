import { expect } from 'chai';

import { Day11Step1 } from '.';

describe('day-11-s1', () => {
    let day = new Day11Step1();

    it('ne,ne,ne is 3 steps away.', () => {
        expect(day.execute('ne,ne,ne')).to.be.equal(3);
    });
    it('ne,ne,sw,sw is 0 steps away (back where you started).', () => {
        expect(day.execute('ne,ne,sw,sw')).to.be.equal(0);
    });
    it('ne,ne,s,s is 2 steps away (se,se).', () => {
        expect(day.execute('ne,ne,s,s')).to.be.equal(2);
    });
    it('se,sw,se,sw,sw is 3 steps away (s,s,sw).', () => {
        expect(day.execute('se,sw,se,sw,sw')).to.be.equal(3);
    });
    it('step 1 input produce 687.', (done) => {
        day.run('assets/day-11/input.txt').subscribe((result) => {
            expect(result).to.be.equal(687);
            done();
        });
    });
});
