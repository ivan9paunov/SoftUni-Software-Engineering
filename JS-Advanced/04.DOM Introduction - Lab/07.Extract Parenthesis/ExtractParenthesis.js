function extract(content) {
    let contentRef = document.getElementById(content).textContent;
    const template = /\((?<str>[^\)]+)\)/gm;
    let printLine = [];
    let matches = contentRef.matchAll(template);
    
    for (let match of matches) {
        let { str } = match.groups;
        printLine.push(str);
    }

    return printLine.join('; ');
}