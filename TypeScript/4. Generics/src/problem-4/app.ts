type Transaction = {
    [key: string]: number;
}

abstract class CreateAccount<T, U> {
    bankName: T;
    bankID: U;

    constructor(bankName: T, bankID: U) {
        this.bankName = bankName;
        this.bankID = bankID;
    }
}

class PersonalAccount<T, U> extends CreateAccount<T, U> {
    readonly ownerName: string;
    money: number;
    recentTransactions: Transaction;

    constructor(bankName: T, bankID: U, ownerName: string) {
        super(bankName, bankID);
        this.ownerName = ownerName;
        this.money = 0;
        this.recentTransactions = {};
    }

    deposit(amount: number): void {
        this.money += amount;
    }
    
    expense(amount: number, expenseType: string) {
        if (amount > this.money) {
            throw new Error(`You cant make ${expenseType} transaction`);
        } 
        
        if (this.recentTransactions.hasOwnProperty(expenseType)) { 
            this.recentTransactions[expenseType] += amount;
        } else {
            this.recentTransactions[expenseType] = amount;
        }

        this.money -= amount;
    }

    showDetails(): string {
        const moneySpent: number = Object.values(this.recentTransactions).reduce((sum: number, val: number) => sum + val);

        return `Bank name: ${this.bankName}\nBank ID: ${this.bankID}\nOwner name: ${this.ownerName}\nMoney: ${this.money}\nMoney spent: ${moneySpent}`;
    }
}

let account = new PersonalAccount<string, number>('DSK', 101240, 'Ivan Ivanov');

account.deposit(1000);
account.deposit(1000);
account.expense(700, 'Buy new phone');
account.expense(400, 'Book a vacation');
account.expense(400, 'Book a vacation');
account.expense(100, 'Buy food');
console.log(account.showDetails());

console.log(`---------------------------`);

let account2 = new PersonalAccount<string, number>('Fibank', 100000, 'Petar Petrol');

account2.deposit(10000);
account2.deposit(7000);
account2.expense(12000, 'Buy a new car');
account2.expense(200, 'Go to a fancy restaurant');
account2.expense(100, 'Go to a bar');
account2.expense(30, 'Go to the movies');
console.log(account2.showDetails());



