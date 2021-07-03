// 输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
// 输出: 2
/**
 * @param {number[]} nums
 * @return {number}
 */
 let test = [1, 2, 3, 2, 2, 2, 5, 4, 2]
 var majorityElement = function(nums) {
    nums.sort((a,b)=>a-b);
    return nums[Math.floor(nums.length/2)];
 };
 console.log(majorityElement(test))