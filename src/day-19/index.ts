import { Day } from '../day';

export abstract class Day19 extends Day<string | number> {

    public followPath(input: string) {
        let path = input.split('\n').map((line) => line.split(''));
        let position = { x: path[0].indexOf('|'), y: 0 };
        let direction = { x: 0, y: 1 };
        let phrase = '';
        let steps = 0;
        while (!this.isFinished(path, position)) {
            switch (path[position.y][position.x]) {
                case '|': case '-':
                    break;
                case '+':
                    if (direction.x === 0) {
                        let before = this.getValue(path, { x: position.x - 1, y: position.y });
                        if (before !== ' ' && before !== '+') {
                            direction = { x: -1, y: 0 };
                        } else {
                            direction = { x: 1, y: 0 };
                        }
                    } else {
                        let before = this.getValue(path, { x: position.x, y: position.y - 1 });
                        if (before !== ' ' && before !== '+') {
                            direction = { x: 0, y: -1 };
                        } else {
                            direction = { x: 0, y: 1 };
                        }
                    }
                    break;
                default:
                    phrase += this.getValue(path, position);
            }
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
        return this.getValue(path, position) === ' ';
    }

}

interface D19Position {
    x: number;
    y: number;
}
