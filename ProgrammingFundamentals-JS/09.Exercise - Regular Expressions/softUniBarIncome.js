function softUniBarIncome(inputArr) {
    let totalIncome = 0;

    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.\d]*(?<price>\d+\.?\d+)\$/;

    let command = inputArr.shift();

    while (command != 'end of shift') {
        let match = command.match(pattern);
        
        if (match) {
            let { customer, product, count, price } = match.groups;
            let income = Number(count) * Number(price);
            totalIncome += income;
            console.log(`${customer}: ${product} - ${income.toFixed(2)}`);
        }
        command = inputArr.shift();
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome(
    [
        '%George%<Croissant>|2|10.3$',
        '%Peter%<Gum>|1|1.3$',
        '%Maria%<Cola>|1|2.4$',
        'end of shift'
    ]
);