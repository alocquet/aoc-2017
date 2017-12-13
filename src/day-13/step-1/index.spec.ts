import { expect } from 'chai';

import { Day13Step1 } from '.';

describe('day-13-s1', () => {
    let day = new Day13Step1();

    it('At time 0, with depth 4, scanner is at position 0', () => {
        expect(day.getScannerPosition(4, 0)).to.be.equal(0);
    });
    it('At time 3, with depth 4, scanner is at position 3', () => {
        expect(day.getScannerPosition(4, 3)).to.be.equal(3);
    });
    it('At time 4, with depth 4, scanner is at position 2', () => {
        expect(day.getScannerPosition(4, 4)).to.be.equal(2);
    });
    it('At time 6, with depth 4, scanner is at position 0', () => {
        expect(day.getScannerPosition(4, 6)).to.be.equal(0);
    });
    it('At time 8, with depth 4, scanner is at position 2', () => {
        expect(day.getScannerPosition(4, 8)).to.be.equal(2);
    });
    it('At time 8, with depth 2, scanner is at position 0', () => {
        expect(day.getScannerPosition(2, 8)).to.be.equal(0);
    });
    it('In the example above, the trip severity is 0*3 + 6*4 = 24.', () => {
        expect(day.execute(`0: 3
1: 2
4: 4
6: 4`)).to.be.equal(24);
    });
    it('step 1 input produce 2508.', (done) => {
        day.run('assets/day-13/input.txt').subscribe((result) => {
            expect(result).to.be.equal(2508);
            done();
        });
    });
});
