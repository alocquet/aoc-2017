import { expect } from 'chai';

import { Day8Step1 } from '.';
import { D8Instruction } from '../index';

describe('day-08-s1', () => {
    let day = new Day8Step1();

    it('b inc 5 if a > 1', () => {
        let instruction = new D8Instruction('b inc 5 if a > 1');
        expect(instruction.variable).to.be.equal('b');
        expect(instruction.value).to.be.equal(5);
        expect(instruction.condition.variable).to.be.equal('a');
        expect(instruction.condition.operator).to.be.equal('>');
        expect(instruction.condition.value).to.be.equal(1);
    });

    it('test give result 1', () => {
        expect(day.execute(`b inc 5 if a > 1
                a inc 1 if b < 5
                c dec -10 if a >= 1
                c inc -20 if c == 10`)).to.be.equal(1);
    });
    it('step 1 input produce 5143.', (done) => {
        day.run('assets/day-08/input.txt').subscribe((result) => {
            expect(result).to.be.equal(5143);
            done();
        });
    });
});
