import { expect } from 'chai';

import { Day10Step2 } from '.';

describe('day-10-s2', () => {
    let day = new Day10Step2();

    it('The empty string becomes a2582a3a0e66e6e86e3812dcb672a272.', () => {
        expect(day.execute('')).to.be.equal('a2582a3a0e66e6e86e3812dcb672a272');
    });
    it('AoC 2017 becomes 33efeb34ea91902bb2f59c9920caa6cd.', () => {
        expect(day.execute('AoC 2017')).to.be.equal('33efeb34ea91902bb2f59c9920caa6cd');
    });
    it('1,2,3 becomes 3efbe78a8d82f29979031a4aa0b16a9d.', () => {
        expect(day.execute('1,2,3')).to.be.equal('3efbe78a8d82f29979031a4aa0b16a9d');
    });
    it('1,2,4 becomes 63960835bcdc130f0b66d7ff4f6a5a8e.', () => {
        expect(day.execute('1,2,4')).to.be.equal('63960835bcdc130f0b66d7ff4f6a5a8e');
    });
    it('input becomes 63960835bcdc130f0b66d7ff4f6a5a8e.', () => {
        expect(day.execute('230,1,2,221,97,252,168,169,57,99,0,254,181,255,235,167'))
            .to.be.equal('0c2f794b2eb555f7830766bf8fb65a16');
    });
});
