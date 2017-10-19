export class Item {
    private name: string;
    private count: number;

    public constructor(name: string, count: number) {
        this.name = name;
        this.count = count;
    }

    public toString(): string {
        return this.count + ' db ' + this.name;
    }
}
