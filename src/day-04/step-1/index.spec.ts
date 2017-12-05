import { expect } from 'chai';

import { Day4Step1 } from '.';

describe('day-04-s1', () => {
    let day = new Day4Step1();

    it('aa bb cc dd ee is valid.', () => {
        expect(day.valid('aa bb cc dd ee')).to.be.equal(true);
    });
    it('aa bb cc dd aa is not valid - the word aa appears more than once.', () => {
        expect(day.valid('aa bb cc dd aa')).to.be.equal(false);
    });
    it('aa bb cc dd aaa is valid - aa and aaa count as different words.', () => {
        expect(day.valid('aa bb cc dd aaa')).to.be.equal(true);
    });
    it('step 1 input produce 383.', (done) => {
        day.run('assets/day-04/input.txt').subscribe((result) => {
            expect(result).to.be.equal(383);
            done();
        });
    });
});
