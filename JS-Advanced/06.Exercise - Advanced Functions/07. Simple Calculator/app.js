function calculator() {
    
    let calculate = {
        init(selector1, selector2, resultSelector) {
            this.num1 = document.querySelector(selector1);
            this.num2 = document.querySelector(selector2);
            this.result = document.querySelector(resultSelector);
        },
        add() {
            this.result.value = Number(this.num1.value) + Number(this.num2.value);
        },
        subtract() {
            this.result.value = Number(this.num1.value) - Number(this.num2.value);
        }
    }

    return calculate;
}




