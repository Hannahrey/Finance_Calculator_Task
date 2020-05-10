/**
 * function to calculate the 5% admin fee
 * @param {amountBorrow} contains the amount borrowed
 */

function adminFee(amountBorrow : number) {
    let fee = (amountBorrow  * 0.05);
    return fee;
}

