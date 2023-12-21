function chessBoard(size) {
    let result = '';

    result += '<div class="chessboard">\n';
    
    for (let horizontal = 0; horizontal < size; horizontal++) {
        let row = '';
        row += '  <div>\n';

        for(let vertical = 0; vertical < size; vertical++) {
            let color = (horizontal + vertical) % 2 ? 'white' : 'black';
            row += `    <span class="${color}"></span>\n`;   
        }

        row += '  </div>\n';
        result += row;
    }

    result += '</div>';
    console.log(result);
}

chessBoard(3);