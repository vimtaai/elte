export class Todo {
    private _id: number;
    private _text: string;

    public constructor(id: number, text: string) {
        this._id = id;
        this._text = text;
    }

    public get id(): number {
        return this._id;
    }

    public get text(): string {
        return this._text;
    }

    public toString(): string {
        return this.text;
    }

}
