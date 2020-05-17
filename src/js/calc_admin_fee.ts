/**
 * function to calculate the 5% admin fee
 * @param {amountBorrow} contains the amount borrowed
 */

function adminFee(amountBorrow : number): number {
    let fee: number = (amountBorrow * 0.05);
    return fee;
}
