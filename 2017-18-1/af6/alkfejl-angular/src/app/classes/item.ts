import { FamilyMember } from './family-member';

export class Item {
    private id: number;
    
    public constructor(
        private text: string,
        private count: number,
        private familyMember: FamilyMember = null
    ) {}

    public changeCount(amount: number) {
        this.count = Math.max(0, this.count + amount);
    }

    public toString(): string {
        return this.count + ' db ' + this.text;
    }
}
