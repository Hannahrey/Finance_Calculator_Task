/**
 * function which outputs the total repayment amount
 * @param {amountBorrow} contains the amount borrowed
 */
function calcRepayment(amountBorrow) {
    if (amountBorrow > 7200) {
        var totalRepayment = amountBorrow + 1000;
        return totalRepayment;
    }
    else if (amountBorrow > 6400) {
        var totalRepayment = amountBorrow + 500;
        return totalRepayment;
    }
    else {
        var totalRepayment = amountBorrow;
        return totalRepayment;
    }
}
