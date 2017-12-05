import { expect } from 'chai';

import { Day1Step1 } from '.';

describe('day-01-s1', () => {
    const day = new Day1Step1();

    it('1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit '
        + 'and the third digit (2) matches the fourth digit.', () => {
            expect(day.execute('1122')).to.be.equal(3);
        });
    it('1111 produces 4 because each digit (all 1) matches the next.', () => {
        expect(day.execute('1111')).to.be.equal(4);
    });
    it('1234 produces 0 because no digit matches the next.', () => {
        expect(day.execute('1234')).to.be.equal(0);
    });
    it('91212129 produces 9 because the only digit that matches the next one is the last digit, 9.', () => {
        expect(day.execute('91212129')).to.be.equal(9);
    });
    it('step 1 input produce 1223.', (done) => {
        day.run('assets/day-01/input.txt').subscribe((result) => {
            expect(result).to.be.equal(1223);
            done();
        });
    });
});
