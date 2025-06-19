
// //Hint
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

var setZeros = function (matrix) {
    const rowLength = matrix.length;
    const colLength = matrix[0].length;
    let col10 = 1;
    for (let row = 0; row < rowLength; row++) {
        for (let col = 0; col < colLength; col++) {
            if (matrix[row][col] === 0) {
                matrix[row][0] = 0;
                if (col === 0) {
                    col10 = 0;
                }
            } else {
                matrix[0][col] = 0;
            }
        }
    }

    for (let row = 1; row < rowLength; row++) {

    }

}

