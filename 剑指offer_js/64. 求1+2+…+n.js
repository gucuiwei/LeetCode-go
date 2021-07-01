/**
 * @param {number} n
 * @return {number}
 */
 var sumNums = function(n) {
    let sum = n
    let flag = n>0 && (sum+=sumNums(n-1))>0
    return sum
};