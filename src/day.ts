import * as fs from 'graceful-fs';
import { Observable } from 'rxjs';

export abstract class Day<T> {

    public run(fileName: string): Observable<T> {
        return this.readFile(fileName).map((str) => this.execute(str));
    }

    public readFile(fileName: string): Observable<string> {
        return Observable.bindNodeCallback(fs.readFile)(fileName).map((res) => res.toString());
    }

    public abstract execute(input: string): T;
}
