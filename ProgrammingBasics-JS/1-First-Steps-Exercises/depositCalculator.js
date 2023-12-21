function depositCalculator(input) {
    let depositedSum = Number(input[0]);
    let depositLasting = Number(input[1]);
    let yearlyInterestRate = Number(input[2]);
    let totalInterest = depositedSum * (yearlyInterestRate / 100);
    let monthlyInterest = totalInterest / 12;
    let totalSum = depositedSum + (depositLasting * monthlyInterest);
    //сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
    console.log(totalSum);
}

depositCalculator([200, 3, 5.7]);