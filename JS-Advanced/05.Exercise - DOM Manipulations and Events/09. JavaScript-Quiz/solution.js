function solve() {
    let rightAnswers = 0;

    const [firstQuestion, secondQuestion, thirdQuestion] = document.querySelectorAll('section'); 
    const resultText = document.querySelectorAll('h1')[1]; 
    const [correctAnswer, wrongAnswer] = firstQuestion.querySelectorAll('p'); 

    correctAnswer.addEventListener('click', passFirst);
    wrongAnswer.addEventListener('click', passFirst);

    function passFirst(event) {
        if (event.target.textContent == 'onclick') {
            rightAnswers++;
        }

        firstQuestion.style.display = 'none';
        secondQuestion.style.display = 'block';

        const [wrongAnswer, correctAnswer] = secondQuestion.querySelectorAll('p');

        correctAnswer.addEventListener('click', passSecond);
        wrongAnswer.addEventListener('click', passSecond);       
    }

    function passSecond(event) {
        if (event.target.textContent == 'JSON.stringify()') {
            rightAnswers++;
        }

        secondQuestion.style.display = 'none';
        thirdQuestion.style.display = 'block';

        const [correctAnswer, wrongAnswer] = thirdQuestion.querySelectorAll('p');

        correctAnswer.addEventListener('click', passThird);
        wrongAnswer.addEventListener('click', passThird);      
    }

    function passThird(event) {
        if (event.target.textContent == 'A programming API for HTML and XML documents') {
            rightAnswers++;
        }

        thirdQuestion.style.display = 'none';
        document.getElementById('results').style.display = 'block';

        if (rightAnswers == 3) {
            resultText.textContent = 'You are recognized as top JavaScript fan!';
        } else {
            resultText.textContent = `You have ${rightAnswers} right answers`;
        }
    }
}