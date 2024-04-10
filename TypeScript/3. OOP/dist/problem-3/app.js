"use strict";
class BankAccount {
    constructor() {
        this.id = 0;
        this.ballance = 0.00;
        this.interest = 0.02;
        this.accounts = {};
    }
    setInterestRate(newRate) {
        this.interest = newRate;
    }
    getInterest(id, years) {
        if (this.accounts.hasOwnProperty(id)) {
            console.log(`${(this.accounts[id] * this.interest * years).toFixed(2)}`);
        }
        else {
            console.log('Account does not exist');
        }
    }
    createAccount() {
        this.id++;
        this.accounts[this.id] = this.ballance;
        console.log(`Account ID${this.id} created`);
    }
    deposit(id, amount) {
        if (this.accounts.hasOwnProperty(id)) {
            this.accounts[id] = amount;
            console.log(`Deposited ${amount} to ID${id}`);
        }
        else {
            console.log('Account does not exist');
        }
    }
}
function bankAccount(commands) {
    const myBank = new BankAccount();
    for (let command of commands) {
        if (command == 'Create') {
            myBank.createAccount();
        }
        else if (command.includes('Deposit')) {
            const [_, idAsStr, amountAsStr] = command.split(' ');
            const id = Number(idAsStr);
            const amount = Number(amountAsStr);
            myBank.deposit(id, amount);
        }
        else if (command.includes('SetInterest')) {
            const [_, rateAsStr] = command.split(' ');
            const rate = Number(rateAsStr);
            myBank.setInterestRate(rate);
        }
        else if (command.includes('GetInterest')) {
            const [_, idAsStr, yearsAsStr] = command.split(' ');
            const id = Number(idAsStr);
            const years = Number(yearsAsStr);
            myBank.getInterest(id, years);
        }
        else if (command == 'End') {
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
