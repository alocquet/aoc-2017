import { expect } from 'chai';

import { Day4Step2 } from '.';

describe('day-04-s2', () => {
    const day = new Day4Step2();

    it('abcde fghij is a valid passphrase.', () => {
        expect(day.valid('abcde fghij')).to.be.equal(true);
    });
    it('abcde xyz ecdab is not valid - the letters from'
        + ' the third word can be rearranged to form the first word.', () => {
            expect(day.valid('abcde xyz ecdab')).to.be.equal(false);
        });
    it('a ab abc abd abf abj is a valid passphrase, '
        + 'because all letters need to be used when forming another word.', () => {
            expect(day.valid('a ab abc abd abf abj')).to.be.equal(true);
        });
    it('iiii oiii ooii oooi oooo is valid.', () => {
        expect(day.valid('iiii oiii ooii oooi oooo')).to.be.equal(true);
    });
    it('oiii ioii iioi iiio is not valid - '
        + 'any of these words can be rearranged to form any other word.', () => {
            expect(day.valid('oiii ioii iioi iiio')).to.be.equal(false);
        });
    it('step 1 input produce 265.', (done) => {
        day.run('assets/day-04/input.txt').subscribe((result) => {
            expect(result).to.be.equal(265);
            done();
        });
    });
});
