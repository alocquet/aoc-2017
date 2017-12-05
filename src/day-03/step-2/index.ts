export class Day3Step2 {

    private operations = {
        0: { x: 0, y: -1 },
        1: { x: -1, y: 0 },
        2: { x: 0, y: 1 },
        3: { x: 1, y: 0 },
    };

    public execute(input: number): number {
        let cellIdx = 1;
        const values = new Map<string, number>();
        values.set(this.getCellKey(0, 0), 1);

        let x = 0;
        let y = 0;

        for (let squareIdx = 1; ; squareIdx++) {
            x++;
            y++;
            for (let quarter = 0; quarter < 4; quarter++) {
                const operation = this.operations[quarter];
                for (let idx = 0; idx < squareIdx * 2; idx++) {
                    cellIdx++;
                    x += operation.x;
                    y += operation.y;
                    const value = this.getSumAround(values, x, y);
                    if (value > input) {
                        return value;
                    }
                    values.set(x + ';' + y, value);
                }
            }
        }
    }

    public getSumAround(values: Map<string, number>, x: number, y: number): number {
        return [-1, 0, 1].reduce((sum, xi) =>
            [-1, 0, 1].reduce((subsum, yi) => {
                const value = values.get(this.getCellKey(x + xi, y + yi));
                if (value) {
                    return subsum + value;
                }
                return subsum;
            }, sum)
            , 0);
    }

    public getCellKey(x: number, y: number) {
        return x + ';' + y;
    }

}
