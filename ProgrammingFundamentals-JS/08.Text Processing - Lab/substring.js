function substring(text, startIdx, count) {
    let endIdx = startIdx + count;
    console.log(text.substring(startIdx, endIdx));
}

substring('ASentence', 1, 8);