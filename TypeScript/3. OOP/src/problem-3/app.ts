type Accounts = {
    [id: number]: number
}

class BankAccount {
    private id: number = 0;
    private ballance: number = 0.00;
    private interest: number = 0.02;

    private accounts: Accounts = {};

    setInterestRate(newRate: number) {
        this.interest = newRate;
    }

    getInterest(id: number, years: number): void {
        if (this.accounts.hasOwnProperty(id)) {
            console.log(`${(this.accounts[id] * this.interest * years).toFixed(2)}`);
        } else {
            console.log('Account does not exist');
        }
    }

    create(): void {
        this.id++;
        this.accounts[this.id] = this.ballance;
        console.log(`Account ID${this.id} created`);
    }

    deposit(id: number, amount: number) {
        if (this.accounts.hasOwnProperty(id)) {
            this.accounts[id] = amount;
            console.log(`Deposited ${amount} to ID${id}`);
        } else {
            console.log('Account does not exist');
        }
    }
}

function bankAccount(commands: string[]) {
    const myBank = new BankAccount();
    
    for (let command of commands) {
        if (command == 'Create') {
            myBank.create();
            
        } else if (command.includes('Deposit')) {
            const [_, idAsStr, amountAsStr] = command.split(' ');
            const id: number = Number(idAsStr);
            const amount: number = Number(amountAsStr);

            myBank.deposit(id, amount);

        } else if (command.includes('SetInterest')) {
            const [_, rateAsStr] = command.split(' ');
            const rate: number = Number(rateAsStr);

            myBank.setInterestRate(rate);

        } else if (command.includes('GetInterest')) {
            const [_, idAsStr, yearsAsStr] = command.split(' ');
            const id: number = Number(idAsStr);
            const years: number = Number(yearsAsStr);

            myBank.getInterest(id, years);

        } else if (command == 'End') {
            return;
        }
    }
}

bankAccount([
    'Create',
    'Deposit 1 20',
    'GetInterest 1 10',
    'End'
]);
console.log('---');
bankAccount([
    'Create',
    'Create',
    'Deposit 1 20',
    'Deposit 3 20',
    'Deposit 2 10',
    'SetInterest 1.5',
    'GetInterest 1 1',
    'GetInterest 2 1',
    'GetInterest 3 1',
    'End'
]);