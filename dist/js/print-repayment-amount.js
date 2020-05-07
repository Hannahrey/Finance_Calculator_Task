/**
 * function which Outputs the total repayment amount to the appropriate div on the frontend
 *
 * @param {}
 */
function printRepaymentAmount(repayment) {
    var repaymentContainer = document.querySelector('#repayment');
    var repaymentContent = "<p>Total repayment amount: \u00A3" + repayment.toFixed(2) + "</p>";
    repaymentContainer.innerHTML = repaymentContent;
}
