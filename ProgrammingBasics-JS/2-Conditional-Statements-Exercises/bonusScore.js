function bonusScore(input) {
    let startingScore = Number(input[0]);
    let bonusScore = 0;

    if (startingScore <= 100) {
        bonusScore = 5;
    } else if (startingScore > 1000) {
        bonusScore = startingScore / 10;
    } else { 
        bonusScore = startingScore / 5; }

    if (startingScore % 2 == 0) {
        bonusScore += 1;
    } else if (startingScore % 10 == 5) {
        bonusScore += 2; }
    console.log(bonusScore);

    let totalScore = startingScore + bonusScore;
    console.log(totalScore);
}

bonusScore (["175"]);