/**
 * function which outputs the total repayment amount 
 * @param {amountBorrow} contains the amount borrowed
 */

function calcRepayment(amountBorrow: number) {
   if (amountBorrow > 7200) {
       let totalRepayment = amountBorrow  + 1000;
       return totalRepayment;
   } else if (amountBorrow  > 6400 ) {
        let totalRepayment = amountBorrow  + 500;
        return totalRepayment;
   } else {
       let totalRepayment = amountBorrow ;
       return totalRepayment;
   }
}