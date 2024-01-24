function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  const outputText = caseTransformer(text, convention);

  let result = document.getElementById('result');
  result.textContent = outputText;

  function caseTransformer(example, typeCase) {
    let wordsArr = example.split(' ').map((e) => e.toLowerCase());
    let casedWord = '';

    if (typeCase == 'Camel Case') {
      casedWord = wordsArr.shift();

      for (let word of wordsArr) {
        word = word[0].toUpperCase() + word.slice(1);
        casedWord += word;
      }
    } else if (typeCase == 'Pascal Case') {
      for (let word of wordsArr) {
        word = word[0].toUpperCase() + word.slice(1);
        casedWord += word;
      }
    } else {
      casedWord = 'Error!';
    }

    return casedWord;
  }
}