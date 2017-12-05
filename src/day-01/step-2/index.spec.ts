import { expect } from 'chai';

import { Day1Step2 } from '.';

describe('day-01-s2', () => {
    let day = new Day1Step2();

    it('1212 produces 6: the list contains 4 items, and all four digits match the digit 2 items ahead.', () => {
        expect(day.execute('1212')).to.be.equal(6);
    });
    it('1221 produces 0, because every comparison is between a 1 and a 2.', () => {
        expect(day.execute('1221')).to.be.equal(0);
    });
    it('123425 produces 4, because both 2s match each other, but no other digit has a match.', () => {
        expect(day.execute('123425')).to.be.equal(4);
    });
    it('123123 produces 12.', () => {
        expect(day.execute('123123')).to.be.equal(12);
    });
    it('12131415 produces 4.', () => {
        expect(day.execute('12131415')).to.be.equal(4);
    });
    it('step 2 input produce 1284.', (done) => {
        day.run('assets/day-01/input.txt').subscribe((result) => {
            expect(result).to.be.equal(1284);
            done();
        });
    });
});
