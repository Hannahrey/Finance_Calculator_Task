let calculateButton = document.querySelector('.button');
let resultsBox = <HTMLElement>document.querySelector('.results');
let errorBox = <HTMLElement>document.querySelector('.error');
let numberCheck = RegExp(/^[\d]+$/);
let expectedSalaryInput = <HTMLInputElement>document.querySelector('#salaryExp');
let monthlyPercentInput = <HTMLInputElement>document.querySelector('#monthlyRepayment');
let borrowInput = <HTMLInputElement>document.querySelector('#borrow');


//when calculate button clicked, triggers event listener
calculateButton.addEventListener('click', function(e) {
    e.preventDefault();
    
    //if input fields don't match regex, or are not filled out then alert is triggered.
    if (!numberCheck.test(expectedSalaryInput.value) || !numberCheck.test(monthlyPercentInput.value) || !numberCheck.test(borrowInput.value)) {
        printError(resultsBox, errorBox, "Error: please enter a number in all fields");
        return;
    }
    //parseFloat converts the value from a string to a float
    let expectedSalary = parseFloat(expectedSalaryInput.value);
    let monthlyPercent = parseFloat(monthlyPercentInput.value);
    let borrow = parseFloat(borrowInput.value);
    

    //checking the amount to borrow is between £0-8000, or triggers error
    if (borrow < 0 || borrow > 8000) {
        printError(resultsBox, errorBox, "Error: You can only borrow between £0-8000");
        return;
    }

    //checking the monthly repayment % is between 0-100, or triggers error
    if (monthlyPercent < 10 || monthlyPercent > 100) {
        printError(resultsBox, errorBox, "Error: The monthly percentage must be between 10-100%");
        return;
    }

    //checking the expected salary is between £0-100000, or triggers error
    if (expectedSalary < 0 || expectedSalary > 100000) {
        printError(resultsBox, errorBox, "Error: Expected salary must be between £0-100000");
        return;
    } 

    let calculatedRepayment = calcRepayment(borrow);
    let totalMonth = totalMonths(expectedSalary, calculatedRepayment, monthlyPercent);
    //print results to screen
    printResult(calculatedRepayment, totalMonth, adminFee(borrow));   
});




