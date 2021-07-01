/**
 * @param {number} n
 * @return {number[]}
 */
 var printNumbers = function(n) {
    let num = Math.pow(10,n) - 1
    let res = []
    for(let i = 0; i < num; i++){
        res.push(i+1)
    }
    return res
};