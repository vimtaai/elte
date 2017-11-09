export class FamilyMember {
    constructor(
        private _name: string
    ) {}

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}
