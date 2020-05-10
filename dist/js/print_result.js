/**
 * function shows the results box, prints calculation to the screen, and hides the error box.
 * @param {totalRepayment} contains the amount to be repaid
 * @param {totalMonths} contains the number of months will take to repay
 * @param {adminFee} contains admin fee amount.
 */
function printResult(totalRepayment, totalMonths, adminFee) {
    removeHidden(resultsBox);
    errorBox.classList.add('hidden');
    var repaymentContent = "<p>Total repayment amount: \u00A3" + totalRepayment.toFixed(2) + "</p>";
    var monthsContent = "<p>Number of months required to pay off in full: " + totalMonths.toFixed(1) + "</p>";
    var adminFeeContent = "<p>Additional admin fee to pay (in advance): \u00A3" + adminFee.toFixed(2) + "</p>";
    resultsBox.innerHTML = repaymentContent + monthsContent + adminFeeContent;
}
