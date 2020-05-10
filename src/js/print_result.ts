/**
 * function shows the results box, prints calculation to the screen, and hides the error box.
 * @param {totalRepayment} contains the amount to be repaid
 * @param {totalMonths} contains the number of months will take to repay
 * @param {adminFee} contains admin fee amount.
 */

function printResult(totalRepayment: number, totalMonths: number, adminFee: number) {
    removeHidden(resultsBox);
    errorBox.classList.add('hidden');
    
    let repaymentContent = `<p>Total repayment amount: £${totalRepayment.toFixed(2)}</p>`;
    let monthsContent = `<p>Number of months required to pay off in full: ${totalMonths.toFixed(1)}</p>`;
    let adminFeeContent = `<p>Additional admin fee to pay (in advance): £${adminFee.toFixed(2)}</p>`;
    resultsBox.innerHTML = repaymentContent + monthsContent + adminFeeContent;   
}
