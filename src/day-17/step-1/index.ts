export class Day17Step1 {

    public execute(step: number): number {
        let buffer = [0];
        let cursor = 0;
        for (let idx = 1; idx <= 2017; idx++) {
            cursor = (cursor + step) % buffer.length + 1;
            buffer = [...buffer.slice(0, cursor), idx, ...buffer.slice(cursor)];
        }
        return buffer[cursor + 1];
    }

}
