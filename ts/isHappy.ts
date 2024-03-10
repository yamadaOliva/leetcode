/* happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

*/
const digitSquareSum = (n: number): number => {
    let sum: number = 0;
    while (n > 0) {
        let digit: number = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}
function isHappy(n: number): boolean {
    let slow: number = n;
    let fast: number = n;
    do {
        slow = digitSquareSum(slow);
        fast = digitSquareSum(digitSquareSum(fast));
    } while (slow !== fast);
    return slow === 1;
};