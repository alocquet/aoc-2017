import { expect } from 'chai';

import { Day16Step2 } from '.';

describe('day-16-s2', () => {
    let day = new Day16Step2();

    it('In the eample, After finishing their second dance, the programs end up in order ceadb.', () => {
        expect(day.execute('s1,x3/4,pe/b', 5, 2)).to.be.equal('ceadb');
    });
    it('step 2 input produce amkjepdhifolgncb.', (done) => {
        day.run('assets/day-16/input.txt').subscribe((result) => {
            expect(result).to.be.equal('amkjepdhifolgncb');
            done();
        });
    });
});
