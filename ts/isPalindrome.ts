function isPalindrome(x: number): boolean {
    if (x<0) return false
    if (x === 0) return true;
    let temp :number = x;
    let ptr: number = 0;
    while (temp > 0) {
        ptr = ptr * 10 + temp % 10;
        temp = Math.floor(temp / 10);
    }
    return ptr === x;
}
console.log(isPalindrome(121)); // true