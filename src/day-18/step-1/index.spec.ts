import { expect } from 'chai';

import { Day18Step1 } from '.';

describe('day-18-s1', () => {
    let day = new Day18Step1();

    it('In the example, recovered sound frequency is 4.', () => {
        expect(day.execute(`set a 1
add a 2
mul a a
mod a 5
snd a
set a 0
rcv a
jgz a -1
set a 1
jgz a -2`)).to.be.equal(4);
    });
    it('With the input, recovered sound frequency is 2951.', (done) => {
        day.run('assets/day-18/input.txt').subscribe((result) => {
            expect(result).to.be.equal(2951);
            done();
        });
    });
});
