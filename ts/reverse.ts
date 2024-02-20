function reverse(x: number): number {
    let reversed = 0;
    while (x !== 0) {
        let pop = x % 10;
        x = Math.trunc(x / 10);
        reversed = reversed * 10 + pop;
    }
    if (reversed > Math.pow(2, 31) - 1 || reversed < Math.pow(-2, 31)) return 0;
    return reversed;
};