import { expect } from 'chai';

import { Day21Step1 } from '.';
import { D21Pattern } from '..';

describe('day-21-s1', () => {
    let day = new Day21Step1();

    it('Check all rotation of ../.#', () => {
        let rotations = new D21Pattern('../.# => ##./#../...').from;
        expect(rotations.length).to.be.equal(12);
        expect(rotations[0]).to.be.equal('../.#');
        expect(rotations[1]).to.be.equal('../#.');
        expect(rotations[2]).to.be.equal('#./..');
        expect(rotations[3]).to.be.equal('.#/..');
    });
    it('Thus, after 2 iterations, the grid contains 12 pixels that are on.', () => {
        let result = day.execute('../.# => ##./#../...\n.#./..#/### => #..#/..../..../#..#', 2);
        expect(result).to.be.equal(12);
    });
    it('With the input, after 5 steps, the result is particle 186.', (done) => {
        day.run('assets/day-21/input.txt').subscribe((result) => {
            expect(result).to.be.equal(186);
            done();
        });
    });
});
