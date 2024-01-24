function sumTable() {
    const tableRows = document.querySelectorAll('tr');
    let totalPrice = 0;

    for (let i = 1; i < tableRows.length - 1; i++) {
        let singlePrice = tableRows[i].children[1].textContent;
        totalPrice += Number(singlePrice);
    }

    const sumRef = document.getElementById('sum');
    sumRef.textContent = totalPrice;
}