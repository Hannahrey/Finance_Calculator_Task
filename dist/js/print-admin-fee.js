/**
 * function which Outputs the admin fee amount to the appropriate div on the frontend
 * @param {adminFee}
 */
function printAdminFee(adminFee) {
    var adminFeeContainer = document.querySelector('#adminFee');
    var adminFeeContent = "<p>Additional admin fee to pay (in advance): \u00A3" + adminFee.toFixed(2) + "</p>";
    adminFeeContainer.innerHTML = adminFeeContent;
}
