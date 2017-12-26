import { expect } from 'chai';

import { Day24Step1 } from '.';

describe('day-24-s1', () => {
    let day = new Day24Step1();

    it('In the example, the strongest one is 0/1--10/1--9/10; it has a strength of 0+1 + 1+10 + 10+9 = 31.', () => {
        expect(day.execute(`0/2
2/2
2/3
3/4
3/5
0/1
10/1
9/10`)).to.be.equal(31);
    });

    it('With input, the max strength is 1656.', function(done) {
        this.timeout(10000);
        day.run('assets/day-24/input.txt').subscribe((result) => {
            expect(result).to.be.equal(1656);
            done();
        });
    });
});
