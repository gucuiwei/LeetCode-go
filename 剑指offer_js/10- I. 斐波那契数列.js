/**
 * @param {number} n
 * @return {number}
 */

// 使用常规递归无法实现
 var fib = function(n) {
    if(n<=0){
         return 0;
     }
     if(n==1){
         return 1;
     }
     var fibN = 0;
     var fibOne = 0;
     var fibTwo = 1;
     for(var i=2;i<=n;i++){
         fibN = (fibOne + fibTwo)%(1e9+7);
         fibOne = fibTwo;
         fibTwo = fibN;
     }
     return fibN;
 };