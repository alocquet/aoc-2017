import { expect } from 'chai';

import { Day16Step1 } from '.';
import { D16Exchange, D16InstructionFactory, D16Partner, D16Spin } from '..';

describe('day-16-s1', () => {
    let day = new Day16Step1();

    it('s1 is a spin with factor 1', () => {
        let instr = D16InstructionFactory.create('s1');
        expect(instr).to.be.instanceof(D16Spin);
        expect((instr as D16Spin).factor).to.be.equal(1);
    });
    it('x3/4 is a exchange between id 3 and 4', () => {
        let instr = D16InstructionFactory.create('x3/4');
        expect(instr).to.be.instanceof(D16Exchange);
        expect((instr as D16Exchange).idA).to.be.equal(3);
        expect((instr as D16Exchange).idB).to.be.equal(4);
    });
    it('pe/b is a partner between e and b', () => {
        let instr = D16InstructionFactory.create('pe/b');
        expect(instr).to.be.instanceof(D16Partner);
        expect((instr as D16Partner).progA).to.be.equal('e');
        expect((instr as D16Partner).progB).to.be.equal('b');
    });
    it('s1, a spin of size 1: abcde -> eabcd.', () => {
        expect(D16InstructionFactory.create('s1').execute('abcde')).to.be.equal('eabcd');
    });
    it('x3/4, swapping the last two programs: eabcd -> eabdc.', () => {
        expect(D16InstructionFactory.create('x3/4').execute('eabcd')).to.be.equal('eabdc');
    });
    it('x1/3, swapping the 2nd and 4th programs: abcde -> adcbe.', () => {
        expect(D16InstructionFactory.create('x1/3').execute('abcde')).to.be.equal('adcbe');
    });
    it('pe/b, swapping programs e and b: baedc.', () => {
        expect(D16InstructionFactory.create('pe/b').execute('eabdc')).to.be.equal('baedc');
    });
    it('In the eample, After finishing their dance, the programs end up in order baedc.', () => {
        expect(day.execute('s1,x3/4,pe/b', 5)).to.be.equal('baedc');
    });
    it('step 1 input produce fnloekigdmpajchb.', (done) => {
        day.run('assets/day-16/input.txt').subscribe((result) => {
            expect(result).to.be.equal('fnloekigdmpajchb');
            done();
        });
    });
});
