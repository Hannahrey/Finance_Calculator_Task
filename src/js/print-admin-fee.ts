/**
 * function which Outputs the admin fee amount to the appropriate div on the frontend
 * @param {adminFee} 
 */
function printAdminFee(adminFee: number) {
    let adminFeeContainer = document.querySelector('#adminFee');
    let adminFeeContent = `<p>Additional admin fee to pay (in advance): £${adminFee.toFixed(2)}</p>`;
    adminFeeContainer.innerHTML = adminFeeContent;
}





