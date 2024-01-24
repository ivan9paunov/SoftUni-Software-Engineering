function solve() {
    const textInput = document.getElementById('input').value;
    const outputRef = document.getElementById('output');
    const htmlOutput = createParagraphs(textInput);
    outputRef.innerHTML = htmlOutput;

    function createParagraphs(text) {
        let sentances = text.split('.').filter((el) => el.length >= 1).map((el) => el.trim());
        //Adding fullstop after every sentance
        sentances = sentances.map((sen) => sen = sen + '.');
        
        let paragraphs = [];
        let collectionOfThree = [];
        let curParagraph = '';
        let counter = 0;
        
        for (let line of sentances) {
            collectionOfThree.push(line);
            counter++;
    
            if (collectionOfThree.length == 3 || counter == sentances.length) {
                curParagraph = `<p>${collectionOfThree.join('')}</p>`;
                paragraphs.push(curParagraph);
                collectionOfThree = [];
                curParagraph = '';
            }
        }
    
        return paragraphs.join('\n');
    }
}