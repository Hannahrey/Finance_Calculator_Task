/**
 * function which outputs the total repayment amount
 * @param {amountBorrow} contains the amount borrowed
 */
var calculateButton = document.querySelector('.button');
var resultsBox = document.querySelector('.results');
var expectedSalaryInput = document.querySelector('#salaryExp');
var monthlyPercentInput = document.querySelector('#monthlyRepayment');
var borrowInput = document.querySelector('#borrow');
function calcRepayment(amountBorrow) {
    if (amountBorrow > 8000) {
        alert("Error- the maximum amount you can borrow is 8000");
    }
    else if (amountBorrow > 7200) {
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
/**
 * function to calculate how many months it would take to repay the loan in full.
 * @param {expectedSalary} contains the expected salary in £
* @param {monthlyPercent} contains the percentage of pre tax salary to be repayed monthly
* @param {calcRepayment} contains the amount to be repayed
 */
function totalMonths(expectedSalary, calcRepayment, monthlyPercent) {
    var monthlyRepayment = (expectedSalary / 12) * (monthlyPercent / 100);
    var noOfMonths = calcRepayment / monthlyRepayment;
    printMonths(noOfMonths);
}
;
/**
 * function to calculate the 5% admin fee
 * @param {amountBorrow} contains the amount borrowed
 */
function adminFee(amountBorrow) {
    var fee = (amountBorrow * 0.05);
    printAdminFee(fee);
}
//when calculate button clicked, triggers event listener
calculateButton.addEventListener('click', function (e) {
    e.preventDefault();
    //parseFloat converts the value from a string to a float
    var expectedSalary = parseFloat(expectedSalaryInput.value);
    var monthlyPercent = parseFloat(monthlyPercentInput.value);
    var borrow = parseFloat(borrowInput.value);
    //if input fields not filled out then alert is triggered.
    if (!expectedSalary || !monthlyPercent || !borrow) {
        alert("Please fill in all fields");
        return;
    }
    removeHidden(resultsBox);
    adminFee(borrow);
    totalMonths(expectedSalary, calcRepayment(borrow), monthlyPercent);
    printRepaymentAmount(calcRepayment(borrow));
});
