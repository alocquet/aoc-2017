import { expect } from 'chai';

import { Day18Step2 } from '.';

describe('day-18-s2', () => {
    let day = new Day18Step2();

    it('In the example, prog 1 sent 3 times to prog 2.', () => {
        expect(day.execute(`snd 1
snd 2
snd p
rcv a
rcv b
rcv c
rcv d`)).to.be.equal(3);
    });
    it('With the input, prog 1 sent 3 times to prog 2.', (done) => {
        day.run('assets/day-18/input.txt').subscribe((result) => {
            expect(result).to.be.equal(7366);
            done();
        });
    });
});
