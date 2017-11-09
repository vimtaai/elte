import { FamilyMember } from './family-member';

export class Item {
    public constructor(
        private name: string,
        private count: number,
        private member: FamilyMember
    ) {}

    public changeCount(amount: number) {
        this.count = Math.max(0, this.count + amount);
    }

    public toString(): string {
        return this.count + ' db ' + this.name;
    }
}
