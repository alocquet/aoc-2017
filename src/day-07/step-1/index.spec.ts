import { expect } from 'chai';

import { Day7Step1 } from '.';

describe('day-07-s1', () => {
    let day = new Day7Step1();

    it('test give result tknk', () => {
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
cntj (57)`)).to.be.equal('tknk');
    });
    it('step 1 input produce 6681.', (done) => {
        day.run('assets/day-07/input.txt').subscribe((result) => {
            expect(result).to.be.equal('cyrupz');
            done();
        });
    });
});
