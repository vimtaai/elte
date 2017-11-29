import { FamilyMember } from './family-member';

export class Item {
    public id: number;
    
    public constructor(
        private text: string,
        public count: number,
        private familyMember: FamilyMember = null
    ) {}

    public getId(): number {
        return this.id;
    }

    public changeCount(amount: number): void {
        this.count = Math.max(0, this.count + amount);
    }

    public toString(): string {
        return this.count + ' db ' + this.text;
    }
}
