export class Item {
    private name: string;
    private count: number;

    public constructor(name: string, count: number) {
        this.name = name;
        this.count = count;
    }

    public changeCount(amount: number) {
        this.count = Math.max(0, this.count + amount);
    }

    public toString(): string {
        return this.count + ' db ' + this.name;
    }
}
