import { D20Particle, Day20 } from '..';

export class Day20Step1 extends Day20 {

    public execute(input: string): number {
        let particles = this.parse(input);
        let previousClosestParticle: D20Particle;
        let previousClosestParticleCount = 0;
        while (true) {
            particles.forEach((particle) => particle.nextState());
            let closestParticule = particles.reduce((closest, current) =>
                closest.distanceFromOrigin() <= current.distanceFromOrigin() ? closest : current);
            if (previousClosestParticle === closestParticule) {
                previousClosestParticleCount++;
            } else {
                previousClosestParticle = closestParticule;
                previousClosestParticleCount = 1;
            }
            if (previousClosestParticleCount > 200) {
                return previousClosestParticle.id;
            }
        }
    }

}
