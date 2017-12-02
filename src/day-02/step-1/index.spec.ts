import { expect } from 'chai';

import { Day2Step1 } from '.';

describe('day-02-s1', () => {
    let day1Step1 = new Day2Step1();
    before(() => {
    });

    it('The first row\'s largest and smallest values are 9 and 1, and their difference is 8.', () => {
        // Act
        let result = day1Step1.checksumLine('5 1 9 5');
        // Assert
        expect(result).to.be.equal(8);
    });

    it('The second row\'s largest and smallest values are 7 and 3, and their difference is 4.', () => {
        // Act
        let result = day1Step1.checksumLine('7 5 3');
        // Assert
        expect(result).to.be.equal(4);
    });

    it('The third row\'s difference is 6.', () => {
        // Act
        let result = day1Step1.checksumLine('2 4 6 8');
        // Assert
        expect(result).to.be.equal(6);
    });

    it('The checksum is 18.', () => {
        // Act
        let result = day1Step1.execute('5 1 9 5\n7 5 3\n2 4 6 8');
        // Assert
        expect(result).to.be.equal(18);
    });

    it('step 1 input produce 39126.', (done) => {
        // Act
        day1Step1.run('assets/day-02/input.txt').subscribe(result => {
            expect(result).to.be.equal(39126);
            done();
        });
    });
});