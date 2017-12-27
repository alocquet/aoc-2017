import { Day } from '../day';

export abstract class Day24 extends Day<number> {

    protected parse(input: string): D24Component[] {
        return input.split('\n').map((line, id) => new D24Component(id, line));
    }

    protected computeValidBridges(from: number, components: D24Component[], useLength: boolean): Bridge {
        let result = [];
        for (let idx = 0; idx < components.length; idx++) {
            let component = components[idx];
            let port = component.ports.indexOf(from);
            if (port !== -1) {
                let otherComponents = [...components];
                otherComponents.splice(idx, 1);
                let validBridge = this.computeValidBridges(component.ports[(port + 1) % 2]
                    , otherComponents, useLength);

                if (validBridge !== undefined) {
                    validBridge.length++;
                    validBridge.strength += component.strength;
                    result.push(validBridge);
                }
                result.push({ strength: component.strength, length: 1 });
            }
        }
        if (result.length === 0) {
            return undefined;
        }
        return result.reduce((a, b) => {
            if (!useLength || a.length === b.length) {
                return (a.strength >= b.strength) ? a : b;
            }
            return (a.length > b.length) ? a : b;
        });
    }

}

export class D24Component {
    public ports: number[] = [];

    constructor(public id: number, input: string) {
        let values = /(\d+)\/(\d+)/.exec(input);
        this.ports.push(parseInt(values[1], 10));
        this.ports.push(parseInt(values[2], 10));
    }

    public get strength() {
        return this.ports[0] + this.ports[1];
    }
}

interface Bridge {
    strength: number;
    length: number;
}
