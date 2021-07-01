/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 let test = [
    [1, 4,  7, 11, 15],
    [2, 5,  8, 12, 19],
    [3, 6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
 var findNumberIn2DArray = function(matrix, target) {
    if(matrix.length) {
       var translateArray = matrix.reduce(function (a, b) { return a.concat(b)} )
       for(let i = 0;i<translateArray.length;i++) {
           if (target === translateArray[i]) {
               return true
           }
       }
    }
   return false
};