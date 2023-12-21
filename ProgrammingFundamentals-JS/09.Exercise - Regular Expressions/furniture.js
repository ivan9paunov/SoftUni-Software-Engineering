function furniture(inputArr) {
    let boughtItems = [];
    let totalPrice = 0;

    let pattern = />>(?<product>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<qty>\d+)/;

    let command = inputArr.shift();
    
    while (command != 'Purchase') {
        let match = command.match(pattern);
        
        if (match) {
            let { product, price, qty } = match.groups;

            boughtItems.push(product);
            let curPrice = Number(price) * Number(qty);
            totalPrice += curPrice;
        }
        
        command = inputArr.shift();
    }

    console.log('Bought furniture:');

    if (boughtItems.length > 0) {
        console.log(boughtItems.join('\n'));
    }
    
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

furniture(
    [
        '>>Sofa<<312.23!3',
        '>>TV<<300!5',
        '>Invalid<<!5',
        'Purchase'
    ]
);