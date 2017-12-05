export class Day3Step1 {

    public execute(input: number): number {
        let squareIdx = 0;
        let remain = input - 1;
        while (remain > 0) {
            remain = remain - 8 * (1 + squareIdx++);
        }
        while (remain < 0) {
            remain += 2 * squareIdx;
        }
        return Math.abs(remain - squareIdx) + squareIdx;
    }

}
