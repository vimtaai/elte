import { User } from './user';

export class Todo {
    private _id: number;
    private _text: string;
    private _user: User;

    public constructor(id: number, text: string, user: User) {
        this._id = id;
        this._text = text;
        this._user = user;
    }

    public get id(): number {
        return this._id;
    }

    public get text(): string {
        return this._text;
    }

    public get user(): User {
        return this._user;
    }

    public toString(): string {
        return this.text;
    }

}
