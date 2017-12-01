import { expect } from 'chai';

import { Day1Step1 } from '.';

describe('day-01-s1', () => {
    let day1Step1 = new Day1Step1();
    before(() => {
    });

    it('1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.', () => {
        // Act
        let result = day1Step1.execute('1122');
        // Assert
        expect(result).to.be.equal(3);
    });

    it('1111 produces 4 because each digit (all 1) matches the next.', () => {
        // Act
        let result = day1Step1.execute('1111');
        // Assert
        expect(result).to.be.equal(4);
    });

    it('1234 produces 0 because no digit matches the next.', () => {
        // Act
        let result = day1Step1.execute('1234');
        // Assert
        expect(result).to.be.equal(0);
    });

    it('91212129 produces 9 because the only digit that matches the next one is the last digit, 9.', () => {
        // Act
        let result = day1Step1.execute('91212129');
        // Assert
        expect(result).to.be.equal(9);
    });

    it('step 1 input produce 1223.', (done) => {
        // Act
        day1Step1.run('assets/day-01/input.txt').subscribe(result => {
            expect(result).to.be.equal(1223);
            done();
        });
    });
});