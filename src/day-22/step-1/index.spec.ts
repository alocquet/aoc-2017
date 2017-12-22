import { expect } from 'chai';

import { Day22Step1 } from '.';

describe('day-22-s1', () => {
    let day = new Day22Step1();

    it('After a total of 7 bursts of activity, 5 bursts of activity caused an infection.', () => {
        expect(day.execute('..#\n#..\n...', 7)).to.be.equal(5);
    });
    it('After a total of 70 bursts of activity, 41 bursts of activity caused an infection.', () => {
        expect(day.execute('..#\n#..\n...', 70)).to.be.equal(41);
    });
    it('After a total of 10000 bursts of activity, 5587 bursts of activity caused an infection.', () => {
        expect(day.execute('..#\n#..\n...')).to.be.equal(5587);
    });
    it('After a total of 10000 bursts of activity, 5552.'
        + ' bursts of activity caused an infection with input.', (done) => {
            day.run('assets/day-22/input.txt').subscribe((result) => {
                expect(result).to.be.equal(5552);
                done();
            });
        });
});
