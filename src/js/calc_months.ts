/**
 * function to calculate how many months it would take to repay the loan in full.
 *@param {expectedSalary} contains the expected salary in £
* @param {monthlyPercent} contains the percentage of pre tax salary to be repayed monthly
* @param {calcRepayment} contains the amount to be repayed
 */

function totalMonths(expectedSalary: number, calcRepayment: number, monthlyPercent: number) : number {
    let monthlyRepayment: number = (expectedSalary / 12) * (monthlyPercent/100);
    let noOfMonths: number = calcRepayment / monthlyRepayment;
    return noOfMonths;
};
