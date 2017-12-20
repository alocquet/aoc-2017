import { D20Particle, Day20 } from '..';

export class Day20Step2 extends Day20 {

    private static TICKS_BEFORE_EXIT = 200;

    public execute(input: string): number {
        let particles = this.parse(input);
        let ticksBeforeExit = Day20Step2.TICKS_BEFORE_EXIT;
        while (ticksBeforeExit > 0) {
            // compute next states and remove collisions
            particles.forEach((particle) => particle.nextState());
            let particlesWithoutCollisions = this.removeCollisions(particles);
            // update counter
            if (particlesWithoutCollisions.length === particles.length) {
                ticksBeforeExit--;
            } else {
                ticksBeforeExit = Day20Step2.TICKS_BEFORE_EXIT;
                particles = particlesWithoutCollisions;
            }
        }
        return particles.length;
    }

    public removeCollisions(particles: D20Particle[]): D20Particle[] {
        let particlesMap = new Map<string, D20Particle>();
        let collision = new Set<string>();
        for (let particle of particles) {
            let representation = particle.position.toString();
            if (particlesMap.has(representation)) {
                collision.add(representation);
                particlesMap.delete(representation);
            } else if (!collision.has(representation)) {
                particlesMap.set(representation, particle);
            }
        }
        return [...particlesMap.values()];
    }

}
