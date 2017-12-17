export class Day17Step2 {

    public execute(step: number): number {
        let result;
        let cursor = 0;
        for (let bufferLength = 1; bufferLength <= 50000000; bufferLength++) {
            cursor = (cursor + step) % bufferLength + 1;
            if (cursor === 1) {
                result = bufferLength;
            }
        }
        return result;
    }
}
