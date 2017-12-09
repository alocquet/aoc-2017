import { expect } from 'chai';

import { Day9Step2 } from '.';

describe('day-09-s2', () => {
    let day = new Day9Step2();

    it('<>, 0', () => {
        expect(day.execute('<>')).to.be.equal(0);
    });
    it('<random characters>, 17', () => {
        expect(day.execute('<random characters>')).to.be.equal(17);
    });
    it('<<<<>, 3', () => {
        expect(day.execute('<<<<>')).to.be.equal(3);
    });
    it('<{!>}>, 2', () => {
        expect(day.execute('<{!>}>')).to.be.equal(2);
    });
    it('<!!>, 0', () => {
        expect(day.execute('<!!>')).to.be.equal(0);
    });
    it('<!!!>>, 0', () => {
        expect(day.execute('<!!!>>')).to.be.equal(0);
    });
    it('<{o"i!a,<{i<a>, 10', () => {
        expect(day.execute('<{o"i!a,<{i<a>')).to.be.equal(10);
    });
    it('step 2 input produce 7031.', (done) => {
        day.run('assets/day-09/input.txt').subscribe((result) => {
            expect(result).to.be.equal(7031);
            done();
        });
    });
});
