
// //Hint
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// var setZeroes = function(matrix) {

 
//      let rowLen=matrix.length;//length ofrows
//      let colLen=matrix[0].length //length of coulmvs
    
//     let col0=1;

//      for(let row=0;row<rowLen;row++){
//          for(let col=0;col<colLen;col++){
//              if(matrix[row][col]==0){
                 
//                  matrix[row][0]=0;
//                  if(col==0){
// 	                  col0=0;
                  
//                  }
//                  else{
//                        matrix[0][col]=0;
//                  }
//              }
//          }
//      }

//      for(let row=1;row<rowLen;row++){
//          for(let col=1;col<colLen;col++){
//              if(matrix[row][col]!=0){
//                 if(matrix[0][col]==0 || matrix[row][0]==0){
//                     matrix[row][col]=0
//                 }

//              }
//          }
//      }
     
//       //if 0 0 is 0 then 1st row should be zero
//      if(matrix[0][0]==0){
//          for(let col=0;col<colLen;col++){
//              matrix[0][col]=0
//          }
//      }
	
// 		// it represents first coloumn
//      if(col0==0){
//          for(let row=0;row<rowLen;row++){
//              matrix[row][0]=0
//          }
//      }
    
// };

// Test Case
let matrix = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9]
];

//setZeroes(matrix);
// Time Complexity: O(m × n)
// Space Complexity: O(1) (in-place)


console.log(matrix);

let rows = new Array(matrix.length).fill(false);
let cols = new Array(matrix[0].length).fill(false);
console.log('rows', rows);
console.log('cols', cols);
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[i][j] === 0) {
      rows[i] = true;
      cols[j] = true;
    }
  }
}

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[0].length; j++) {
    if (rows[i] || cols[j]) {
      matrix[i][j] = 0;
    }
  }
}
// Time: O(m × n)
// Space: O(m + n) — for extra row/col arrays.
console.log('matrix',matrix);

//Brute Force Approach (with copy)


