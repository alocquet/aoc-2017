import { expect } from 'chai';

import { Day2Step1 } from '.';

describe('day-02-s1', () => {
    let day = new Day2Step1();

    it('The first row\'s largest and smallest values are 9 and 1, and their difference is 8.', () => {
        expect(day.checksumLine('5 1 9 5')).to.be.equal(8);
    });
    it('The second row\'s largest and smallest values are 7 and 3, and their difference is 4.', () => {
        expect(day.checksumLine('7 5 3')).to.be.equal(4);
    });
    it('The third row\'s difference is 6.', () => {
        expect(day.checksumLine('2 4 6 8')).to.be.equal(6);
    });
    it('The checksum is 18.', () => {
        expect(day.execute('5 1 9 5\n7 5 3\n2 4 6 8')).to.be.equal(18);
    });
    it('step 1 input produce 39126.', (done) => {
        day.run('assets/day-02/input.txt').subscribe((result) => {
            expect(result).to.be.equal(39126);
            done();
        });
    });
});
