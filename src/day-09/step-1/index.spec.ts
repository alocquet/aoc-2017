import { expect } from 'chai';

import { Day9Step1 } from '.';

describe('day-09-s1', () => {
    let day = new Day9Step1();

    it('{}, score of 1', () => {
        expect(day.execute('{}')).to.be.equal(1);
    });
    it('{{{}}}, score of 1 + 2 + 3 = 6', () => {
        expect(day.execute('{{{}}}')).to.be.equal(6);
    });
    it('{{},{}}, score of 1 + 2 + 2 = 5', () => {
        expect(day.execute('{{},{}}')).to.be.equal(5);
    });
    it('{{{},{},{{}}}}, score of 1 + 2 + 3 + 3 + 3 + 4 = 16', () => {
        expect(day.execute('{{{},{},{{}}}}')).to.be.equal(16);
    });
    it('{<a>,<a>,<a>,<a>}, score of 1', () => {
        expect(day.execute('{<a>,<a>,<a>,<a>}')).to.be.equal(1);
    });
    it('{{<ab>},{<ab>},{<ab>},{<ab>}}, score of 1 + 2 + 2 + 2 + 2 = 9', () => {
        expect(day.execute('{{<ab>},{<ab>},{<ab>},{<ab>}}')).to.be.equal(9);
    });
    it('{{<!!>},{<!!>},{<!!>},{<!!>}}, score of 1 + 2 + 2 + 2 + 2 = 9', () => {
        expect(day.execute('{{<!!>},{<!!>},{<!!>},{<!!>}}')).to.be.equal(9);
    });
    it('{{<a!>},{<a!>},{<a!>},{<ab>}}, score of 1 + 2 = 3', () => {
        expect(day.execute('{{<a!>},{<a!>},{<a!>},{<ab>}}')).to.be.equal(3);
    });
    it('step 1 input produce 12897.', (done) => {
        day.run('assets/day-09/input.txt').subscribe((result) => {
            expect(result).to.be.equal(12897);
            done();
        });
    });
});
