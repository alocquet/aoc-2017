import { expect } from 'chai';

import { Day1Step2 } from '.';

describe('day-01-s1', () => {
    let day1Step2 = new Day1Step2();
    before(() => {
    });

    it('1212 produces 6: the list contains 4 items, and all four digits match the digit 2 items ahead.', () => {
        // Act
        let result = day1Step2.execute('1212');
        // Assert
        expect(result).to.be.equal(6);
    });

    it('1221 produces 0, because every comparison is between a 1 and a 2.', () => {
        // Act
        let result = day1Step2.execute('1221');
        // Assert
        expect(result).to.be.equal(0);
    });

    it('123425 produces 4, because both 2s match each other, but no other digit has a match.', () => {
        // Act
        let result = day1Step2.execute('123425');
        // Assert
        expect(result).to.be.equal(4);
    });

    it('123123 produces 12.', () => {
        // Act
        let result = day1Step2.execute('123123');
        // Assert
        expect(result).to.be.equal(12);
    });

    it('12131415 produces 4.', () => {
        // Act
        let result = day1Step2.execute('12131415');
        // Assert
        expect(result).to.be.equal(4);
    });

    it('step 2 input produce 1284.', (done) => {
        // Act
        day1Step2.run('assets/day-01/input.txt').subscribe(result => {
            expect(result).to.be.equal(1284);
            done();
        });
    });
});