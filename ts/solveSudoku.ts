function solveSudoku(board: string[][]): void {
  const solve = (row: number, col: number): boolean => {
    if (row === 9) return true;
    if (col === 9) return solve(row + 1, 0);
    if (board[row][col] !== ".") return solve(row, col + 1);
    for (let num = 1; num <= 9; num++) {
      if (isValid(row, col, num.toString())) {
        board[row][col] = num.toString();
        if (solve(row, col + 1)) return true;
        board[row][col] = ".";
      }
    }
    return false;
  };

  const isValid = (row: number, col: number, num: string): boolean => {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num) return false;
      if (board[i][col] === num) return false;
      if (
        board[3 * Math.floor(row / 3) + Math.floor(i / 3)][
          3 * Math.floor(col / 3) + (i % 3)
        ] === num
      )
        return false;
    }
    return true;
  };

  solve(0, 0);
}
const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
solveSudoku(board);
console.log(board);
