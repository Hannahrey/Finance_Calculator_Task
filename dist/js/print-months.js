/**
 * function which Outputs the number of months to the appropriate div on the frontend
 *
 * @param {}
 */
function printMonths(totalMonths) {
    var monthsContainer = document.querySelector('#months');
    var monthsContent = "<p>Number of months required to pay off in full: " + totalMonths.toFixed(1) + "</p>";
    monthsContainer.innerHTML = monthsContent;
}
