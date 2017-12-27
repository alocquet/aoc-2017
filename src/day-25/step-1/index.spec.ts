import { expect } from 'chai';

import { Day25Step1 } from '.';

describe('day-25-s1', () => {
    let day = new Day25Step1();

    it('In the example, the diagnostic checksum is 3.', () => {
        expect(day.execute(`Begin in state A.
Perform a diagnostic checksum after 6 steps.

In state A:
    If the current value is 0:
        - Write the value 1.
        - Move one slot to the right.
        - Continue with state B.
    If the current value is 1:
        - Write the value 0.
        - Move one slot to the left.
        - Continue with state B.

In state B:
    If the current value is 0:
        - Write the value 1.
        - Move one slot to the left.
        - Continue with state A.
    If the current value is 1:
        - Write the value 1.
        - Move one slot to the right.
        - Continue with state A.`)).to.be.equal(3);
    });

    it('With input, the max strength is 3732.', function(done) {
        this.timeout(5000);
        day.run('assets/day-25/input.txt').subscribe((result) => {
            expect(result).to.be.equal(3732);
            done();
        });
    });
});
