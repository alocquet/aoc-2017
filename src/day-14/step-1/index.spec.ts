import { expect } from 'chai';

import { Day14Step1 } from '.';

describe('day-14-s1', () => {
    let day = new Day14Step1();

    it('In the example, 8108 squares are used across the entire 128x128 grid.', () => {
        expect(day.execute('flqrgnkx')).to.be.equal(8108);
    });
    it('oundnydw give result 8106.', () => {
        expect(day.execute('oundnydw')).to.be.equal(8106);
    });
});
