import { expect } from 'chai';

import { Day6Step2 } from '.';

describe('day-06-s2', () => {
    let day = new Day6Step2();

    it('In the example above, 2 4 1 2 is seen again after four cycles,' +
        ' and so the answer in that example would be 4.', () => {
            expect(day.execute('0 2 7 0')).to.be.equal(4);
        });
    it('step 1 input produce 2392.', (done) => {
        day.run('assets/day-06/input.txt').subscribe((result) => {
            expect(result).to.be.equal(2392);
            done();
        });
    });
});
