import { expect } from 'chai';

import { Day2Step2 } from '.';

describe('day-02-s2', () => {
    let day = new Day2Step2();

    it('In the first row, the only two numbers that evenly divide are 8 and 2; the result of this division is 4.', () => {
        expect(day.checksumLine('5 9 2 8')).to.be.equal(4);
    });
    it('In the second row, the two numbers are 9 and 3; the result is 3.', () => {
        expect(day.checksumLine('9 4 7 3')).to.be.equal(3);
    });
    it('In the third row, the result is 2.', () => {
        expect(day.checksumLine('3 8 6 5')).to.be.equal(2);
    });
    it('The checksum is 9.', () => {
        expect(day.execute('5 9 2 8\n9 4 7 3\n3 8 6 5')).to.be.equal(9);
    });
    it('step 1 input produce 258.', (done) => {
        day.run('assets/day-02/input.txt').subscribe(result => {
            expect(result).to.be.equal(258);
            done();
        });
    });
});