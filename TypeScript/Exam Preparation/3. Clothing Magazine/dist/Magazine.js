"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    addCloth(cloth) {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    }
    removeCloth(color) {
        const clothIdx = this.clothes.findIndex(element => element.color == color);
        if (clothIdx != -1) {
            this.clothes.splice(clothIdx, 1);
            return true;
        }
        return false;
    }
    getSortedClothes() {
        const sorted = this.clothes.sort((a, b) => a.size - b.size);
        return sorted;
    }
    getSmallestCloth() {
        if (!this.clothes.length) {
            return {};
        }
        const smallestCloth = this.getSortedClothes()[0];
        return smallestCloth;
    }
    getCloth(color) {
        const cloth = this.clothes.find(element => element.color == color);
        return cloth;
        // if (cloth) {
        // }
    }
    getClothCount() {
        const clothCount = this.clothes.length;
        return clothCount;
    }
    report() {
        const sortedClothes = this.getSortedClothes();
        const clothesForReport = sortedClothes.map(element => element.toString()).join('\n');
        const report = `${this.type} magazine contains:\n${clothesForReport}`;
        return report;
    }
}
exports.Magazine = Magazine;
