// 输入：
// [2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3 

// 暴力破解方式
/**
 * @param {number[]} nums
 * @return {number}
 */
 let test = [2, 3, 1, 0, 2, 5, 3]
 var findRepeatNumber = function(nums) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]==nums[j]){
                return nums[i]
            }
        }
    }
}
console.log(findRepeatNumber(test))