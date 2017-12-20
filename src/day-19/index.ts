import { Day } from '../day';

export abstract class Day19 extends Day<string | number> {

    public followPath(input: string) {
        let path = input.split('\n').map((line) => line.split(''));
        let position = { x: path[0].indexOf('|'), y: 0 };
        let direction = { x: 0, y: 1 };
        let phrase = '';
        let steps = 0;
        while (!this.isFinished(path, position)) {
            let current = path[position.y][position.x];
            if (current === '+') {
                // invert direction axis (vert/horiz), test first neightboor and set direction
                let neightboor = this.getValue(path, { x: position.x + direction.y, y: position.y + direction.x });
                if (neightboor && neightboor !== ' ' && neightboor !== '+') {
                    direction = { x: direction.y, y: direction.x };
                } else {
                    direction = { x: -direction.y, y: -direction.x };
                }
            } else if (current !== '|' && current !== '-') {
                // it is a letter
                phrase += this.getValue(path, position);
            }
            // upgrade position
            position.x += direction.x;
            position.y += direction.y;
            steps++;
        }
        return { steps, phrase };
    }


    public getValue(path: string[][], position: D19Position): string {
        return position.x >= 0 && position.y >= 0
            && position.y < path.length && position.x < path[position.y].length
            && path[position.y][position.x];
    }

    public isFinished(path: string[][], position: D19Position) {
        let value = this.getValue(path, position);
        return !value || this.getValue(path, position) === ' ';
    }

}

interface D19Position {
    x: number;
    y: number;
}
