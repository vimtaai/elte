import { Todo } from './todo';

export class User {
    public _todos: Todo[];

    public constructor(
        public id: number,
        public name: String,
        public email: String,
        public role: string
    ) {}

    public get todos() {
        return this._todos;
    }

    public set todos(todos: Todo[]) {
        this._todos = todos;
    }
}
