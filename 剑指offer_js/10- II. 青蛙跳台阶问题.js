
/**
 * @param {number} n
 * @return {number}
 */
// 使用迭代的方法解决

var numWays = function(n) {
    // 采用迭代的方式进行
        if(n<=1) return 1;
        if(n==2) return 2;
        return numWays(n-1)+ numWays(n-2)%1000000007
};

// 优化方法
var numWays = function (n) {
    if (!n || n === 1) return 1;
    let a = 1; //临时保存n-2的值
    let b = 2; //临时保存n-1的值
    let result = n === 2 ? 2 : 0;
    for (let i = 3; i <= n; i++) {
      result = (a + b) % 1000000007;
      a = b;
      b = result;
    }
    return result;
};
console.log(numWays(0))