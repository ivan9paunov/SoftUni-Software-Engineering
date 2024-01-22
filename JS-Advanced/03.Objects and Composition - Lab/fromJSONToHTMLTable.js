function fromJSONToHTMLTable(input) {

    let arr = JSON.parse(input);
    
    let outputArr = ["<table>"];
    let header = Object.keys(arr[0]);
    
    outputArr.push(makeKeyRow(header));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");

    function makeKeyRow(header) {
        let rowStr = '    <tr>';
        
        for (let i = 0; i < header.length; i++) {
            rowStr += '<th>';
            rowStr += header[i];
            rowStr += '</th>';
        }

        rowStr += '</tr>';
        return rowStr;
    };

    function makeValueRow(obj) {
        let rowStr = '    <tr>';
        
        for (let i = 0; i < header.length; i++) {
            rowStr += '<td>';
            rowStr += escapeHtml(obj[header[i]]);
            rowStr += '</td>';
        }

        rowStr += '</tr>';
        return rowStr;
    };

    function escapeHtml(value) {
        let entityMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': '&quot;',
            " ": '&nbsp;'
        };
        
        return value.toString().replace(/[&<> "]/g, (value) => entityMap[value]);
    };

    console.log(outputArr.join('\n'));
}

fromJSONToHTMLTable(
    '[{"Name":"Stamat","Price":5.5},{"Name":"Rumen","Price":6}]'
);

// fromJSONToHTMLTable(`[
//     {"Name":"Pesho","Score":4," Grade":8},
//     {"Name":"Gosho","Score":5," Grade":8},
//     {"Name":"Angel","Score":5.50," Grade":10}]`);