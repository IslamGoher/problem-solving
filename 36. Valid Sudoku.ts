function isValidSudoku(board: string[][]): boolean {
  const DOT = ".";
  for (let i = 0; i < board.length; i++) {

    // row by row
    const rows = {};
    for (const el of board[i]) {
      if (rows[el]) return false;
      if (el !== DOT) {
        if (el > "9" || el < "1") return false;
        else rows[el] = 1
      }
    }

    // column by column
    const columns = {};
    for (let j = 0; j < board[i].length; j++) {
      const el = board[j][i];
      if (columns[el]) return false;
      if (el !== DOT) {
        if (el > "9" || el < "1") return false;
        else columns[el] = 1;
      }
    }
  }
  
  // box by box
  for (let i = 0; i < 9; i+=3) { // all the matrix
    for (let j = 0; j < 9; j+=3) { // first line of the boxes
      const box = {};
      for (let k = i; k < i+3; k++){ // box
        for (let l = j; l < j+3; l++) { // first 3 element of the box
          const el = board[k][l]
          if (box[el]) return false;
          if (el !== DOT) {
            if (el > "9" || el < "1") return false;
            else box[el] = 1;
          }
        }
      }
    }
  }

  return true;
};

// O(n^2)
