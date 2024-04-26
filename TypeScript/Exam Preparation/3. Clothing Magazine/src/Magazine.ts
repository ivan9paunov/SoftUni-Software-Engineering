import { Cloth } from './Cloth';

export class Magazine {
    private type: string;
    private capacity: number;
    private clothes: Cloth[];

    constructor(type: string, capacity: number) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }

    addCloth(cloth: Cloth): void {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth)
        }
    }

    removeCloth(color: string): boolean {
        const clothIdx = this.clothes.findIndex(element => element.color == color);

        if (clothIdx != -1) {
            this.clothes.splice(clothIdx, 1);
            return true;
        }

        return false;
    }

    getSortedClothes(): Cloth[] {
        const sorted = this.clothes.sort((a, b) => a.size - b.size);
        return sorted;
    }

    getSmallestCloth(): Cloth {
        if (!this.clothes.length) {
            return {} as Cloth;
        }

        const smallestCloth = this.getSortedClothes()[0];
        return smallestCloth;
    }

    getCloth(color: string): Cloth | undefined {
        const cloth = this.clothes.find(element => element.color == color);
        
        if (cloth) {
            return cloth;
        }
    }

    getClothCount(): number {
        const clothCount = this.clothes.length;
        return clothCount;
    }

    report(): string {
        const sortedClothes = this.getSortedClothes();
        const clothesForReport = sortedClothes.map(element => element.toString()).join('\n')
        
        const report = `${this.type} magazine contains:\n${clothesForReport}`;
        return report;
    }
}