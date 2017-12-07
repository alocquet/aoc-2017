import { expect } from 'chai';

import { Day7Step2 } from '.';

describe('day-07-s2', () => {
    let day = new Day7Step2();

    it('test give result 60', () => {
        expect(day.execute(`pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)`)).to.be.equal(60);
    });
    it('step 1 input produce 193.', (done) => {
        day.run('assets/day-07/input.txt').subscribe((result) => {
            expect(result).to.be.equal(193);
            done();
        });
    });
});
