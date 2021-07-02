// 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

/**
 * 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
 * 要求时间复杂度为O(n)。
 */
/**
 * 
记录一个当前连续子数组最大值 `max` 默认值为数组第一项

记录一个当前连续子数组累加值 `sum` 默认值为数组第一项

1.从数组第二个数开始，若 `sum<0` 则当前的`sum`不再对后面的累加有贡献，`sum = 当前数`

2.若 `sum>0` 则`sum = sum + 当前数`

3.比较 `sum` 和 `max` ，`max = 两者最大值`
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 let test = [-2,1,-3,4,-1,2,1,-5,4]
 var maxSubArray = function(array) {
     if (Array.isArray(array) && array.length > 0) {
         let sum = array[0];
         let max = array[0];
         for (let i = 1; i < array.length; i++) {
           if (sum < 0) {
             sum = array[i];
             console.log(sum)
           } else {
             sum = sum + array[i];
           }
           if (sum > max) {
             max = sum;
           }
         }
         return max;
       }
       return 0;
 };
 console.log(maxSubArray(test))