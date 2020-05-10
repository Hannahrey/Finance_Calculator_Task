// /**
//  * function which Outputs the total repayment amount to the appropriate div on the frontend
//  * 
//  * @param {} 
//  */
// function printRepaymentAmount(repayment: number) {
//     let repaymentContainer = <Element>document.querySelector('#repayment');
//     let repaymentContent = `<p>Total repayment amount: £${repayment.toFixed(2)}</p>`;
//     repaymentContainer.innerHTML = repaymentContent;
// }
// /**
//  * function which Outputs the number of months to the appropriate div on the frontend
//  * 
//  * @param {totalMonths} 
//  */
// function printMonths(totalMonths: number) {
//     let monthsContainer = document.querySelector('#months');
//     let monthsContent = `<p>Number of months required to pay off in full: ${totalMonths.toFixed(1)}</p>`;
//     monthsContainer.innerHTML = monthsContent;
// }
/**
 * function which Outputs the admin fee amount to the appropriate div on the frontend
 * @param {adminFee}
 */
// function printAdminFee(adminFee: number) {
//     let adminFeeContainer = document.querySelector('#adminFee');
//     let adminFeeContent = `<p>Additional admin fee to pay (in advance): £${adminFee.toFixed(2)}</p>`;
//     adminFeeContainer.innerHTML = adminFeeContent;
// }
function printResult(totalRepayment, totalMonths, adminFee) {
    removeHidden(resultsBox);
    errorBox.classList.add('hidden');
    var repaymentContent = "<p>Total repayment amount: \u00A3" + totalRepayment.toFixed(2) + "</p>";
    var monthsContent = "<p>Number of months required to pay off in full: " + totalMonths.toFixed(1) + "</p>";
    var adminFeeContent = "<p>Additional admin fee to pay (in advance): \u00A3" + adminFee.toFixed(2) + "</p>";
    resultsBox.innerHTML = repaymentContent + monthsContent + adminFeeContent;
}
