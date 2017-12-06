import { expect } from 'chai';

import { Day6Step1 } from '.';

describe('day-06-s1', () => {
    let day = new Day6Step1();

    it('0 2 7 0 gives 2 4 1 2', () => {
        expect(JSON.stringify(day.nextConfig([0, 2, 7, 0]))).to.be.equal(JSON.stringify([2, 4, 1, 2]));
    });
    it('2 4 1 2 gives 3 1 2 3', () => {
        expect(JSON.stringify(day.nextConfig([2, 4, 1, 2]))).to.be.equal(JSON.stringify([3, 1, 2, 3]));
    });
    it('3 1 2 3 gives 0 2 3 4', () => {
        expect(JSON.stringify(day.nextConfig([3, 1, 2, 3]))).to.be.equal(JSON.stringify([0, 2, 3, 4]));
    });
    it('0 2 3 4 gives 1 3 4 1', () => {
        expect(JSON.stringify(day.nextConfig([0, 2, 3, 4]))).to.be.equal(JSON.stringify([1, 3, 4, 1]));
    });
    it('1 3 4 1 gives 2 4 1 2', () => {
        expect(JSON.stringify(day.nextConfig([1, 3, 4, 1]))).to.be.equal(JSON.stringify([2, 4, 1, 2]));
    });
    it('With 0 2 7 0, the infinite loop is detected in 5 steps.', () => {
        expect(day.execute('0 2 7 0')).to.be.equal(5);
    });
    it('step 1 input produce 6681.', (done) => {
        day.run('assets/day-06/input.txt').subscribe((result) => {
            expect(result).to.be.equal(6681);
            done();
        });
    });
});
