export abstract class Day10 {

    public computeFirstHash(numberElements: number, lengths: number[], steps: number): number[] {
        let elements = [...Array(numberElements).keys()];
        let idx = 0;
        let skip = 0;
        for (let step = 0; step < steps; step++) {
            lengths.forEach((length) => {
                elements = this.sortElements(elements, idx, length);
                idx = idx + length + skip++;
            });
        }
        return elements;
    }

    public sortElements(elements: number[], idx: number, length: number): number[] {
        let startIdx = idx;
        let endIdx = startIdx + length - 1;
        while (startIdx < endIdx) {
            let firstValue = elements[startIdx % elements.length];
            elements[startIdx % elements.length] = elements[endIdx % elements.length];
            elements[endIdx % elements.length] = firstValue;
            startIdx++;
            endIdx--;
        }
        return elements;
    }

}
