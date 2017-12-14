import { expect } from 'chai';

import { Day14Step2 } from '.';

describe('day-14-s2', () => {
    let day = new Day14Step2();

    it('In the example, 1242 regions are present.', function(done) {
        this.timeout(20000);
        expect(day.execute('flqrgnkx')).to.be.equal(1242);
        done();
    });
    it('oundnydw give result 1164.', function(done) {
        this.timeout(20000);
        expect(day.execute('oundnydw')).to.be.equal(1164);
        done();
    });
});
