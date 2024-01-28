function encodeAndDecodeMessages() {
    const container = Array.from(document.getElementById('main').children);
    const encodeBtn = container[0].querySelector('button');
    let encodeText = container[0].querySelector('textarea');
    const decodeBtn = container[1].querySelector('button');
    let decodeText = container[1].querySelector('textarea');

    encodeBtn.addEventListener('click', encodeOperation);
    decodeBtn.addEventListener('click', decodeOperation);

    function encodeOperation(event) {
        let encodedText = encodingText(encodeText.value);
        decodeText.textContent = encodedText;
        encodeText.value = '';
    }

    function decodeOperation(event) {
        let decodedText = decodingText(decodeText.value);
        decodeText.textContent = decodedText;
    }

    function encodingText(text) {
        let transformedText = '';

        for (let char of text) {
            let charCode = char.charCodeAt() + 1;
            let newChar = String.fromCharCode(charCode);
            transformedText += newChar;
        }

        return transformedText;
    }

    function decodingText(text) {
        let transformedText = '';

        for (let char of text) {
            let charCode = char.charCodeAt() - 1;
            let newChar = String.fromCharCode(charCode);
            transformedText += newChar;
        }

        return transformedText;
    }
}