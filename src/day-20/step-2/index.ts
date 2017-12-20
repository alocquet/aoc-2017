import { D20Particle, Day20 } from '..';

export class Day20Step2 extends Day20 {

    public execute(input: string): number {
        let particles = this.parse(input);
        let ticksBeforeExit = 200;
        while (ticksBeforeExit > 0) {
            particles.forEach((particle) => particle.nextState());

            let particlesMap = new Map<string, D20Particle>();
            let collision = new Set<string>();
            // remove collisions
            for (let particle of particles) {
                let representation = particle.position.toString();
                if (particlesMap.has(representation)) {
                    collision.add(representation);
                    particlesMap.delete(representation);
                } else if (!collision.has(representation)) {
                    particlesMap.set(representation, particle);
                }
            }
            // update counter
            if (particlesMap.size === particles.length) {
                ticksBeforeExit--;
            } else {
                ticksBeforeExit = 200;
                particles = [...particlesMap.values()];
            }
        }
        return particles.length;
    }

}
