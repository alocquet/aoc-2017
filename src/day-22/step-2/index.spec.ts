import { expect } from 'chai';

import { Day22Step2 } from '.';

describe('day-22-s2', () => {
    let day = new Day22Step2();

    it('After a total of 5 bursts of activity, 1 bursts of activity caused an infection.', () => {
        expect(day.execute('..#\n#..\n...', 8)).to.be.equal(1);
    });
    it('After a total of 100 bursts of activity, 26 bursts of activity caused an infection.', () => {
        expect(day.execute('..#\n#..\n...', 100)).to.be.equal(26);
    });
    it('After a total of 10000000 bursts of activity,' +
        ' 2511944 bursts of activity caused an infection.', function(done) {
            this.timeout(5000);
            expect(day.execute('..#\n#..\n...')).to.be.equal(2511944);
            done();
        });
    it('After a total of 10000000 bursts of activity, 2511527.'
        + ' bursts of activity caused an infection with input.', function(done) {
            this.timeout(5000);
            day.run('assets/day-22/input.txt').subscribe((result) => {
                expect(result).to.be.equal(2511527);
                done();
            });
        });

});
