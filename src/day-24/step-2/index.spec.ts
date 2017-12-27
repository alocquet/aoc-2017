import { expect } from 'chai';

import { Day24Step2 } from '.';

describe('day-24-s2', () => {
    let day = new Day24Step2();

    it('In the example, the strength of the longest bridge is 19.', () => {
        expect(day.execute(`0/2
2/2
2/3
3/4
3/5
0/1
10/1
9/10`)).to.be.equal(19);
    });

    it('With input, the strength of the longest bridge is 1642.', function(done) {
        this.timeout(5000);
        day.run('assets/day-24/input.txt').subscribe((result) => {
            expect(result).to.be.equal(1642);
            done();
        });
    });
});
