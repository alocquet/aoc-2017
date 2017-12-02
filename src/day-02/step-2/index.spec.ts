import { expect } from 'chai';

import { Day2Step2 } from '.';

describe('day-02-s2', () => {
    let day1Step1 = new Day2Step2();
    before(() => {
    });

    it('In the first row, the only two numbers that evenly divide are 8 and 2; the result of this division is 4.', () => {
        // Act
        let result = day1Step1.checksumLine('5 9 2 8');
        // Assert
        expect(result).to.be.equal(4);
    });

    it('In the second row, the two numbers are 9 and 3; the result is 3.', () => {
        // Act
        let result = day1Step1.checksumLine('9 4 7 3');
        // Assert
        expect(result).to.be.equal(3);
    });

    it('In the third row, the result is 2.', () => {
        // Act
        let result = day1Step1.checksumLine('3 8 6 5');
        // Assert
        expect(result).to.be.equal(2);
    });

    it('The checksum is 9.', () => {
        // Act
        let result = day1Step1.execute('5 9 2 8\n9 4 7 3\n3 8 6 5');
        // Assert
        expect(result).to.be.equal(9);
    });

    it('step 1 input produce 258.', (done) => {
        // Act
        day1Step1.run('assets/day-02/input.txt').subscribe(result => {
            expect(result).to.be.equal(258);
            done();
        });
    });
});