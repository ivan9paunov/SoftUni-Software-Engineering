class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space == 0) {
            throw new Error('Not enough space in the cellar.');
        }

        const addWine = {
            wineName,
            wineType,
            price,
            paid: false
        }

        this.wines.push(addWine);
        this.space--;
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }

    payWineBottle(wineName, price) {
        const wineExist = this.wines.find((wine) => wine.wineName == wineName);

        if (!wineExist) {
            throw new Error(`${wineName} is not in the cellar.`);
        }
        
        if (wineExist.paid) {
            throw new Error(`${wineName} has already been paid.`);
        }

        wineExist.paid = true;
        this.bill += price;

        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        const wineExist = this.wines.find((wine) => wine.wineName == wineName);

        if (!wineExist) {
            throw new Error(`The wine, you're looking for, is not found.`);
        }

        if (!wineExist.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

        delete this.wines.find((wine) => wine.wineName == wineName);
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        if (wineType) {
            const wine = this.wines.find((wine) => wine.wineType == wineType);

            if (!wine) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            } else {
                return `${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`;
            }


        } else {
            let message = [];
            message.push(`You have space for ${this.space} bottles more.`);
            message.push(`You paid ${this.bill}$ for the wine.`);
            this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            for (let wine of this.wines) {
                message.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`);
            }
            return message.join('\n');
        }
    }
}
